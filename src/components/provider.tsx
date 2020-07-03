import type { FC } from 'react';
import React from 'react';
import { simReactReduxContext } from './context';
import { Provider as ReactReduxProvider } from 'react-redux';

const { Provider: SimReactReduxProvider } = simReactReduxContext;

interface IProps {
  // TODO: 完善这里的类型
  store: any
  context?: any
  actorsFactory: any // IActorsContextValue<any>
}

const Provider: FC<IProps> = ({ actorsFactory, store, context, children }) => (
  <ReactReduxProvider store={store} context={context} >
    <SimReactReduxProvider value={{ actorsFactory }}>
      {children}
    </SimReactReduxProvider>
  </ReactReduxProvider>
)

export {
  Provider
}
