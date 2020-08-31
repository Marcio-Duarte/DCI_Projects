import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from './actions/movieActions'
import MovieCard from './components/MovieCard'
import SearchForm from './components/SearchForm'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#4acee6',
    justifyContent: 'center',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 80,
    marginBottom: 40,
    color: 'white',
  }
}));

function App({ movies, error, fetchMovies }) {
  const css = useStyles();

  useEffect(() => {
    fetchMovies('The Rain');
  }, [fetchMovies])

  return (
    <Grid container className={css.root} >
      <Grid item xs={12} className={css.menu}>
        <SearchForm fetchMovies={fetchMovies} />
      </Grid>
      {movies.map((movie, i) => {
        return <MovieCard key={i} movie={movie} />
      })}
    </Grid>
  )
}

const mapStateToProps = state => ({
  movies: state.movies,
  error: state.error
});

// Dispatch mapping
const mapDispatchToProps = dispatch => ({
  fetchMovies: (text) => dispatch(fetchMovies(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
