import { fetchingStatus } from './actions/actionTypes'

const INITIAL_STATE = {
    authentication: false,
    user: '',
    error: ''
}

export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case fetchingStatus.FETCH_USER_SUCCESS:
            return {
                ...state, user: action.payload.user,
                authentication: action.payload.success
            };

        case fetchingStatus.FETCH_USER_ERROR:
            return {
                ...state, error: action.payload,
                authentication: false
            }

        default:
            return state;
    }
} 