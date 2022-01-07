import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '~/appRedux/reducers';

const middlewares = [thunk];


export function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(), // root reducer 
    preloadedState,
    compose(
      applyMiddleware(
        ...middlewares
      ),
    ),
  );

  return store;
}
