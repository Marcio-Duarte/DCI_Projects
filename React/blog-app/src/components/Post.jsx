import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    marginBottom: '20px',
    '& .MuiCardContent-root': {
      padding: '0px',
      '& p:nth-child(1)': {
        backgroundColor: '#445963',
        textAlign: 'left',
        padding: '10px 0 10px 15px',
        marginBottom: '6px',
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
  footer: {
    backgroundColor: '#e0e0e0',
  },
});

export default function Post({ data }) {
  const css = useStyles();
  const getDate = () => {
    const date = new Date(data.id);
    return `${date.getDate()} ${date.toLocaleString('default', {
      month: 'long',
    })} ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
  };
  const getContent = () => {
    if (data.content.length > 20) {
      return data.content.substr(0, 20) + '...';
    } else return data.content;
  };

  return (
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
        <Typography variant='body2' color='textSecondary' component='p'>
          {getContent()}
        </Typography>
      </CardContent>
      <CardActions className={css.footer}>
        <Button
          size='small'
          to={{
            pathname: `/post/${data.username}/${data.id}`,
            state: { data: data },
          }}
          component={Link}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
