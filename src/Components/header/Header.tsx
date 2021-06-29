// Imports
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo/gmLogo.png';
import Button from '@material-ui/core/Button';


// Styles
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    menuButton: {
      marginRight: 2,
      backgroundColor: 'black',
    },

    appBar: {
      backgroundColor: 'transparent',
      height: '50%',
    },

    text: {
      color: 'black',
      // fontFamily: '"Helvetica Neue"',
    },

    headerText: {
      color: 'black',
      fontSize: '15px',
      // fontFamily: 'Helvetica Neue',
    },

    tabs: {
      marginLeft: '13%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '40%',
    },

    image: {
      width: '10%',
      height: '5%',
      marginLeft: '10%',
    },

  }),
);

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">

          <img src={logo} alt="Logo" className={classes.image} />;

          <div className={classes.tabs}>

            <Button size="small" className={classes.headerText}>About</Button>

            <Button size="small" className={classes.headerText}>About</Button>
            <Button size="small" className={classes.headerText}>Services</Button>
            <Button size="small" className={classes.headerText}>Contact</Button>
            <Button size="small" className={classes.headerText}>Help</Button>

          </div>

        </Toolbar>
      </AppBar>
    </div >
  );
}