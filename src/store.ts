import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducers';

export const store = createStore(rootReducer);