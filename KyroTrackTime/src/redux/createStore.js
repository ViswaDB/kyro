import {createStore, applyMiddleware, compose} from 'redux';

export default (reducers, middlewares) => {
  const enhancer = applyMiddleware(...middlewares);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(reducers, composeEnhancers(enhancer));
};
