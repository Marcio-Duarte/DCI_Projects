import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    margin: 10,
    textAlign: 'center',
  },
  media: {
    width: '100%',
    height: '500px',
  },
});

export default function MovieCard({ movie }) {
  const classes = useStyles();
  const { Poster, Title, Year } = movie;

  return (
    <Card className={classes.root} elevation={10}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Poster} title={Title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {Title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
