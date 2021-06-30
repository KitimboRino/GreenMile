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

import { BrowserRouter as Router, Link, } from 'react-router-dom';

export default function MainListItems() {
  return (
    <div>
      <Router>
        <List>
          {/* Overview */}
          <Link to='/overview'>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary='Overview' />
            </ListItem>
          </Link>

          {/* Suppliers */}
          <Link to='/suppliers'>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary='Suppliers' />
            </ListItem>
          </Link>

          {/* Loaders */}
          <Link to='/loaders'>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Loaders' />
            </ListItem>
          </Link>

          {/* Invoices */}
          <Link to='/invoices'>
            <ListItem button>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary='Invoices' />
            </ListItem>
          </Link>

          {/* Activities */}
          <Link to='/activites'>
            <ListItem button>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary='Activities' />
            </ListItem>
          </Link>

          {/* Articles */}
          <Link to='/articles'>
            <ListItem button>
              <ListItemIcon>
                <AssignmentOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Articles' />
            </ListItem>
          </Link>

          {/* Settings */}
          <Link to='/settings'>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItem>
          </Link>
        </List>

      </Router>
    </div>
  )
}