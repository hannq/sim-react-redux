/*
 * @Author: hannq
 * @Date: 2020-06-05 10:08:42
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-05 10:47:30
 */

import { Store, StoreEnhancer } from 'redux';
import { IActorsFactory, IFillParam, PlunkStateFromStore, PlunkParam1 } from './helper.d';
import { createStore as reduxCreateStore } from 'redux';
import { initStateMap } from './init-state';
import { unionReducer } from './utils';

interface CreateStore {
  <P, S extends PlunkStateFromStore<P>, Ext, StateExt> (
    actorsFactory: IFillParam<P>,
    enhancer?: StoreEnhancer<Ext, StateExt>
  ): Store<S & StateExt, null> & Ext;
  <C extends { [K: string]: IFillParam<any> }, S extends {[X in keyof C]: PlunkStateFromStore<PlunkParam1<C[X]>>}, Ext, StateExt> (
    actorsfactories: C,
    enhancer?: StoreEnhancer<Ext, StateExt>
  ): Store<S & StateExt, null> & Ext;
}

export const createStore: CreateStore = (
  actorsFactory,
  enhancer?
) => {
  if (typeof actorsFactory === 'function') {
    const initState = initStateMap.get(actorsFactory);
    return reduxCreateStore(unionReducer, initState, enhancer);
  } else {
    const actorsfactories: { [K: string]: IActorsFactory<any, any> } = actorsFactory;
    const initState = Object.entries(actorsfactories).reduce((acc, [namespace, actorsFactory]) => {
      acc[namespace] = initStateMap.get(actorsFactory);
      return acc;
    }, {})
    return reduxCreateStore(unionReducer, initState, enhancer)
  }
}
