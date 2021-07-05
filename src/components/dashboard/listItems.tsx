import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import List from '@material-ui/core/List';

import { NavLink, } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  Links: {
    textDecoration: 'none',
    color: 'black',
  },
}));

export default function MainListItems() {
  const classes = useStyles();

  return (
    <div>
      <List>
        {/* Overview */}
        <NavLink to='/overview' className={classes.Links}>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Overview' />
          </ListItem>
        </NavLink>

        {/* Suppliers */}
        <NavLink to='/suppliers' className={classes.Links}>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary='Suppliers' />
          </ListItem>
        </NavLink>

        {/* Loaders */}
        <NavLink to='/loaders' className={classes.Links}>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Loaders' />
          </ListItem>
        </NavLink>

        {/* Invoices */}
        <NavLink to='/invoices' className={classes.Links}>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Invoices' />
          </ListItem>
        </NavLink>

        {/* Activities */}
        <NavLink to='/activites' className={classes.Links}>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary='Activities' />
          </ListItem>
        </NavLink>

        {/* Articles */}
        <NavLink to='/articles' className={classes.Links}>
          <ListItem button>
            <ListItemIcon>
              <AssignmentOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Articles' />
          </ListItem>
        </NavLink>

        {/* Settings */}
        <NavLink to='/settings' className={classes.Links}>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </NavLink>
      </List>

    </div>
  )
}