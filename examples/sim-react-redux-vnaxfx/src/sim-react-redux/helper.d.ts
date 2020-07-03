/*
 * @Author: hannq
 * @Date: 2020-06-04 13:33:43
 * @Last Modified by: hannq
 * @Last Modified time: 2020-06-06 09:57:09
 */

type Combine<T> = (T extends any ? (args: T) => any : never) extends (args: infer A) => any ? A : never;
export type PlunkStateFromStore<S> = S extends IStore<infer SS> ? SS : never;
export type PlunkParam1<P1> = P1 extends IFillParam<infer P> ? P : never;

export interface IFillReturn<R> {
  (...args): R
}

export interface IFillParam<P> {
  (param1: P): void
}

export interface IActorsContextValue<A> {
  (store): A
}

export interface IDispatchActions {
  type: string,
  payload: object
}

export interface IStore<S> {
  /** 获取最新的 state */
  getState(): S;
}

export interface IActorsFactory<S extends any[], A extends { [x: string]: () => void }> {
  (store: IStore<Combine<S[any]>>): Readonly<{
    [K in keyof A]: IAct<Parameters<A[K]>, Combine<S[any]>>
  } & { reset?(): Promise<Partial<Combine<S[any]>>> }>;
}

export interface IAct<P extends any[], R> {
  (...args: P): Promise<Partial<R>>;
}

