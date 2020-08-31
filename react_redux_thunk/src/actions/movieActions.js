import axios from 'axios'
import { fetchingStatus } from './actionTypes'

const fetchResults = {
    success: (movies) => ({
        type: fetchingStatus.FETCH_MOVIES_SUCCESS,
        payload: movies
    }),
    error: (error) => ({
        type: fetchingStatus.FETCH_MOVIES_ERROR,
        payload: error
    })
};

export const fetchMovies = (text) => {
    return (dispatch) => {
        axios.get(`https://www.omdbapi.com/?s=${text}&apikey=21f0ae8e`)
            .then(response => {
                const movies = response.data.Search;
                dispatch(fetchResults.success(movies))
            })
            .catch(error => {
                dispatch(fetchResults.error(error));
            });
    }
}