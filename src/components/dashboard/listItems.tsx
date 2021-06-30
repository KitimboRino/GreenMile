import React from 'react';
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

export default function MainListItems() {
  return (
    <div>
      <List>
        {/* Overview */}
        <NavLink to='/overview'>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Overview' />
          </ListItem>
        </NavLink>

        {/* Suppliers */}
        <NavLink to='/suppliers'>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary='Suppliers' />
          </ListItem>
        </NavLink>

        {/* Loaders */}
        <NavLink to='/loaders'>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Loaders' />
          </ListItem>
        </NavLink>

        {/* Invoices */}
        <NavLink to='/invoices'>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Invoices' />
          </ListItem>
        </NavLink>

        {/* Activities */}
        <NavLink to='/activites'>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary='Activities' />
          </ListItem>
        </NavLink>

        {/* Articles */}
        <NavLink to='/articles'>
          <ListItem button>
            <ListItemIcon>
              <AssignmentOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Articles' />
          </ListItem>
        </NavLink>

        {/* Settings */}
        <NavLink to='/settings'>
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