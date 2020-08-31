import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Input,
  Button,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles({
  grid: { backgroundColor: '#bdbdbd', minHeight: '100vh' },
  card: {
    width: '80%',
    marginTop: '10px',
    '& .MuiCardContent-root': {
      padding: '0px',
      height: '400px',
      '& p:nth-child(1)': {
        backgroundColor: '#445963',
        textAlign: 'left',
        padding: '10px 0 10px 15px',
      },
      '& p:nth-child(2)': {
        textAlign: 'center',
        paddingTop: '15px',
        fontWeight: 'bold',
        fontSize: '2em',
      },
    },
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fafafa',
  },
  date: { fontSize: 12, color: '#bdbdbd' },
  pos: {
    marginBottom: 12,
  },
  textarea: {
    padding: '0 15px 0px 15px',
  },
  footer: {
    backgroundColor: '#e0e0e0',
  },
});

export default function PostDetails({ data }) {
  const css = useStyles();
  const { goBack } = useHistory();

  const getDate = () => {
    const date = new Date(data.id);
    return `${date.getDate()} ${date.toLocaleString('default', {
      month: 'long',
    })} ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <Grid
      className={css.grid}
      container
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Card className={css.card} variant='outlined'>
        <CardContent>
          <Typography className={css.title}>
            {data.username}
            <br />
            <span className={css.date}>{getDate()}</span>
          </Typography>
          <Typography className={css.pos} color='textPrimary'>
            {data.title}
          </Typography>
          <div className={css.textarea}>
            <Input
              id='filled-multiline-static'
              value={data.content}
              multiline
              fullWidth={true}
              disableUnderline={true}
              rows={12}
              variant='standard'
            />
          </div>
        </CardContent>
        <CardActions className={css.footer}>
          <Button size='small' onClick={goBack}>
            Go Back
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
