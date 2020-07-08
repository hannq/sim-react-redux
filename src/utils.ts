/*
 * @Author: hannq
 * @Date: 2020-06-04 12:03:30
 * @Last Modified by: hannq
 * @Last Modified time: 2020-07-03 13:59:57
 */

import type { IActorsFactory, IActorsFactoryEX } from './helper';
import { initStateMap } from './init-state';

export function createActorsFactory<S extends object[], AF extends IActorsFactory<S>>(defaultStates: S, actorsFactory: AF): IActorsFactoryEX<S, AF>;
export function createActorsFactory<S extends object, AF extends IActorsFactory<[S]>>(defaultStates: S, actorsFactory: AF): IActorsFactoryEX<[S], AF>;

/**
 * 创建 actorsFactory
 */
export function createActorsFactory(
  defaultStates,
  actorsFactory
) {
  const defaultState = Array.isArray(defaultStates) ? Object.assign({}, ...defaultStates) : { ...defaultStates };
  initStateMap.set(actorsFactory, defaultState);
  return actorsFactory;
}

/**
 * 合并 ActorsFactories
 * @param factories
 */
export function combineActorsFactories<F>(factories: F) {
  return factories
}

/**
 * 统一使用的 reducer
 * @param prevState
 * @param param1
 */
export function unionReducer(prevState: object, { payload, namespace }: { type: string, namespace?: string, payload: object }) {
  if (namespace) {
    return {
      ...prevState,
      [namespace]: {
        ...prevState[namespace],
        ...payload
      }
    }
  } else {
    return {
      ...prevState,
      ...payload,
    }
  }
}
