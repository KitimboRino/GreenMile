import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event:any) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Delivered() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Packages Delivered</Title>
      <Typography component="p" variant="h4">
        500
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 26 June, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Remaining
        </Link>
      </div>
    </React.Fragment>
  );
}
