import axios from 'axios'
import { fetchingStatus } from './actionTypes'

const fetchResults = {
    success: (data) => ({
        type: fetchingStatus.FETCH_USER_SUCCESS,
        payload: data
    }),
    error: (error) => ({
        type: fetchingStatus.FETCH_USER_ERROR,
        payload: error
    })
};

export const fetchUser = (credentials) => {
    const { userName, password } = credentials;
    return (dispatch) => {
        axios.get(`http://localhost:5000/users/${userName}/${password}`)
            .then(response => {
                const data = response.data;
                dispatch(fetchResults.success(data))
            })
            .catch(error => {
                dispatch(fetchResults.error(error));

            });
    }
}