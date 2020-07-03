/*
 * @Author: hannq
 * @Date: 2020-06-04 22:20:07
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-04 23:59:58
 */

import type { IFillParam, PlunkStateFromStore, PlunkParam1 } from '../helper.d';
import { useSelector } from 'react-redux';

interface CreateSelectorHook {
  <P, S extends PlunkStateFromStore<P>> (actorsfactory: IFillParam<P>): IUseSelector<S>;
  <C extends { [K: string]: IFillParam<any> }> (actorsfactories: C): IUseSelector<{[X in keyof C]: PlunkStateFromStore<PlunkParam1<C[X]>>}>;
}

interface IUseSelector<S> {
  <TSelected = unknown>(
    selector: (state: S) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected
}

export const createSelectorHook: CreateSelectorHook = (
  // eslint-disable-next-line
  _actorsfactory
) => {
  return useSelector
}
