import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// used for redux storage and session persistance.
export const persistor = persistStore(store);

export default { store, persistor };