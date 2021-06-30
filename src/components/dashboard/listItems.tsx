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


export default function MainListItems() {
  return (
    <div>
      <List>
        {/* Overview */}
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary='Overview' />
        </ListItem>

        {/* Suppliers */}
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary='Suppliers' />
        </ListItem>

        {/* Loaders */}
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary='Loaders' />
        </ListItem>

        {/* Invoices */}
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary='Invoices' />
        </ListItem>

        {/* Activities */}
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary='Activities' />
        </ListItem>

        {/* Articles */}
        <ListItem button>
          <ListItemIcon>
            <AssignmentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Articles' />
        </ListItem>

        {/* Settings */}
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary='Settings' />
        </ListItem>
      </List>
    </div>
  )
}