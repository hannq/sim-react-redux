/*
 * @Author: hannq
 * @Date: 2020-06-04 19:07:21
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-05 10:52:10
 */

import { IFillReturn } from '../helper.d';
import { useMemo } from 'react';
import { useStore, useDispatch } from 'react-redux';
import { initStateMap } from '../init-state';

interface ICreateActorsHook {
  <R>(actorsFactory: IFillReturn<R>): IUseActors<R>;
  <C extends {[k: string]: IFillReturn<any>}>(actorsfactories: C): IUseActors2<{[X in keyof C]: ReturnType<C[X]>}>;
}

interface IUseActors<R> {
  (): R;
  <N extends keyof R>(actorName: N): R[N];
}

interface IUseActors2<R> {
  (): R;
  <NS extends keyof R, N extends keyof R[NS]>(namespace: NS, actorName: N): R[NS][N];
}

/**
 * 创建 useActors
 */
export const createActorsHook: ICreateActorsHook = <R> (
  actorsFactory
) => {
  // @ts-ignore
  return function(namespace?: string, actorName?: string) {
    // const { actorsFactory } = useContext(simReactReduxContext);
    const dispatch = useDispatch();
    const store = useStore();
    return useMemo(() => {
      if (typeof actorsFactory === 'function') {
        // 如果是单 factory
        const storeWrapper = { getState() { return store.getState(); } };
        const actorName = namespace;
        // 扩展 actors
        const rawActors = Object.assign(actorsFactory(storeWrapper), { reset: () => initStateMap.get(actorsFactory) });
        if (actorName) {
          return async function(...args) {
            const payload = await Promise.resolve(rawActors[actorName].call(rawActors, ...args));
            dispatch({ type: actorName, payload });
          }
        } else {
          return Object.entries(rawActors).reduce((acc, [type, actor]) => {
            acc[type] = async function(...args) {
              // @ts-ignore: Type '{}' has no call signatures
              const payload = await Promise.resolve(actor.call(rawActors, ...args));
              dispatch({ type, payload });
            }
            return acc;
          }, {})
        }
      } else {
        // 如果是多 factory
        const actorsfactories = actorsFactory;
        if (namespace && actorName) {
          const storeWrapper = { getState() { return store.getState()[namespace]; } };
          return async function(...args) {
            // 扩展 actors
            const rawActors = Object.assign(actorsfactories[namespace](storeWrapper), { reset: () => initStateMap.get(actorsFactory) });
            const payload = await Promise.resolve(rawActors[actorName].call(rawActors, ...args));
            dispatch({ type: `${namespace}-${actorName}`, payload, namespace });
          }
        } else {
          return Object.entries(actorsfactories).reduce((acc, [namespace, actorsFactory]) => {
            const storeWrapper = { getState() { return store.getState()[namespace]; } };
            // @ts-ignore
            const rawActors = Object.assign(actorsFactory(storeWrapper), { reset: () => initStateMap.get(actorsFactory) });
            acc[namespace] = Object.entries(rawActors).reduce((ac, [actorName, actor]) => {
              ac[actorName] = async function(...args) {
                // @ts-ignore
                const payload = await Promise.resolve(actor.call(rawActors, ...args));
                dispatch({ type: `${namespace}-${actorName}`, payload, namespace });
              }
              return ac;
            }, {})
            return acc;
          }, {})
        }
      }
    }, [])
  }
}
