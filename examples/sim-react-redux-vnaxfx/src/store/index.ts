import { applyMiddleware } from 'redux';
import { createActorsHook, Provider, createSelectorHook, createStore } from '../sim-react-redux';
import { createLogger } from 'redux-logger';
import { rootActorsFactory } from './combine-actors-factories';

const useActors = createActorsHook(rootActorsFactory);
const useSelector = createSelectorHook(rootActorsFactory);

const logger = createLogger();
const store = createStore(rootActorsFactory, applyMiddleware(logger));

export {
  store,
  useActors,
  useSelector,
  Provider,
  rootActorsFactory
}
