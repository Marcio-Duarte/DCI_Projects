import React, { useContext } from 'react';
import { BlogContext } from '../context';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Post from './Post';

const useStyles = makeStyles(() => ({
  grid: { backgroundColor: '#bdbdbd' },
  paper: {
    padding: '100px 20px 20px 20px',
    width: '60%',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundColor: 'inherit',
  },
}));

export default function ShowAllPosts() {
  const { posts } = useContext(BlogContext);
  const css = useStyles();

  return (
    <Grid className={css.grid} container direction='row' justify='center'>
      <Paper className={css.paper} elevation={0}>
        {posts.map((post) => {
          return <Post key={post.id} data={post} />;
        })}
      </Paper>
    </Grid>
  );
}
