import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { reducer as moviesReducer } from './reducers/moviesReducer'

const store = createStore(
    moviesReducer,
    applyMiddleware(thunk)
);

export default store;
