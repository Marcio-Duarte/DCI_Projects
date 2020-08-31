import { fetchingStatus } from '../actions/actionTypes'

const INITIAL_STATE = {
    movies: [],
    error: ''
}

export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case fetchingStatus.FETCH_MOVIES_SUCCESS:
            return { ...state, movies: action.payload };

        case fetchingStatus.FETCH_MOVIES_ERROR:
            return { ...state, error: action.payload }

        default:
            return state;
    }
} 