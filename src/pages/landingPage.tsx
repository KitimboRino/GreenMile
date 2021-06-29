import React from 'react'
import Header from '../components/header/Header';
// import Footer from '../Components/footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MarkunreadMailboxOutlinedIcon from '@material-ui/icons/MarkunreadMailboxOutlined';


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    hero: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },

    card: {
      marginTop: '50px',
      width: '925px',
      height: '560px',
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
    },

    bottomText2: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },

    bottomBtn: {
      width: '120px',
      backgroundColor: '#9AE265',
      height: '45px',
    },

    bottomDiv: {
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '80px',
    },


    bottomCard: {
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'row',
      // alignSelf: 'center',
      justifyContent: 'spaced-between',
    },

    icon: {
      color: '#9AE265',
      size: '40px',
    }
  }),
);

function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />

      <div className={classes.hero}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography style={{ marginTop: 10, fontSize: 44, fontWeight: 'bold', }} >
              Simplify your deliveries!
            </Typography>

            <Typography style={{ marginTop: 10, fontSize: 16, width: '80%', }}>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.
            </Typography>

          </CardContent>

          <div className={classes.bottomDiv}>
            <Button size="small" className={classes.bottomBtn}>Start Now</Button>
            <Button size="small" className={classes.bottomBtn}>Learn More</Button>
          </div>

        </Card>

        <Typography style={{ marginTop: 10, fontSize: 32, fontWeight: 'bold' }}>
          Delivery at your doorstep
        </Typography>

        <div className={classes.bottomCard}>
          <div>
            <WorkOutlineIcon className={classes.icon} />
            <Typography >
              Delivery Communication
            </Typography>
          </div>

          <div>
            <LockOutlinedIcon className={classes.icon} />
            <Typography >
              Secure
            </Typography>
          </div>

          <div>
            <MarkunreadMailboxOutlinedIcon className={classes.icon} />
            <Typography >
              Logistic Performance
            </Typography>
          </div>
        </div>

      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default LandingPage
