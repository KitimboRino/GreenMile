import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo/gmLogo.png';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Logo from '../../../public/gmLogo';

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
      // opacity: '90%',
      height: '50%',
    },

    text: {
      color: 'black',
      // fontFamily: '"Helvetica Neue"',
    },

    headerText: {
      color: 'black',
      fontSize: '18px',
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

            <Typography className={classes.headerText}>
              About
            </Typography>

            <Typography className={classes.headerText}>
              Services
            </Typography>

            <Typography className={classes.headerText}>
              Contact
            </Typography>

            <Typography className={classes.headerText}>
              Help
            </Typography>
          </div>

        </Toolbar>
      </AppBar>
    </div >
  );
}