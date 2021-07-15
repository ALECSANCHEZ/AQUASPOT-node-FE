/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import DirectionsBoatTwoToneIcon from '@material-ui/icons/DirectionsBoatTwoTone';
import FolderSharedTwoToneIcon from '@material-ui/icons/FolderSharedTwoTone';
import FolderIcon from '@material-ui/icons/Folder';
import ContactsTwoToneIcon from '@material-ui/icons/ContactsTwoTone';
import EventNoteTwoToneIcon from '@material-ui/icons/EventNoteTwoTone';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import AirportShuttleTwoToneIcon from '@material-ui/icons/AirportShuttleTwoTone';

const breadcrumbNameMap = {
  '/Inicio':'Inicio',
  
  '/ProdumarDuran': 'Produmar Duran',
  '/ProdumarTaura': 'Produmar Taura',
  '/Facturas': 'Facturas',
  '/Settings': 'Settings',
  '/Registro_Cliente': 'Registro Clientes',
  '/Registro_Camaronera': 'Registrar Camaronera',
  '/Registro_Operador': 'Registro Operador',
  '/Registro_Cosechadora': 'Registro Cosechadora',
  '/Formulario_de_Cosecha': 'Formulario Cosecha',
  '/Formulario_de_transferencia': 'Formulario transferencia',


};

function ListItemLink(props) {
  const classes = useStyles();
  const { TITLE, icon,to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
        <ListItem className={clsx(classes.item, classes.itemActiveItem, classes.categoryHeader)} button component={RouterLink} to={to} {...other} icon={icon}>
        <ListItemIcon className ={clsx(classes.itemActiveItem)}>{icon}</ListItemIcon>
        <Typography > {TITLE} </Typography>
        <ListItemText primary={primary} classes={{primary: classes.categoryHeaderPrimary,}}/>
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
  //open1: PropTypes.bool,
  //to2: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 360,
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: 'white',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  item: {
    paddingTop: 20,
    paddingBottom: 15,
    color: 'primary',
    '&:hover,&:focus': {
      backgroundColor: 'primary',
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

export default function RouterBreadcrumbs(props) {
  const classes = useStyles();


  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);};

  const [open1, setOpen1] = React.useState(false);
  const handleClick1 = () => {
    setOpen1(!open1);};

  const [open2, setOpen2] = React.useState(false);
  const handleClick2 = () => {
      setOpen2(!open2);};

  return (
    <MemoryRouter  initialIndex={0}>
      <div className={classes.root}>
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split('/').filter((x) => x);

            return (
              <Breadcrumbs aria-label="breadcrumb">
                
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="textPrimary" key={to}>
                      {breadcrumbNameMap[to]}
                    </Typography>
                  ) : (
                    <LinkRouter color="inherit" to={to} key={to}>
                      {breadcrumbNameMap[to]}
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            );
          }}
        </Route>
          <List disablePadding>
            <ListItemLink to="/Inicio" icon = {<HomeIcon/>} />
            <Divider/>
            <ListItem button onClick = {handleClick1} className={clsx(classes.item, classes.itemActiveItem, classes.categoryHeader)}>
                <ListItemIcon>
                    <AssessmentIcon/>
                </ListItemIcon>
                <ListItemText primary='Dashboard'/>
                {open1 ? <ExpandLess /> : <ExpandMore/>}
            </ListItem>
            <Collapse component="div" in={open1} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink to="/ProdumarDuran" className={classes.nested} icon ={<BallotTwoToneIcon/>}/>
                <ListItemLink to="/ProdumarTaura" className={classes.nested} icon ={<BallotTwoToneIcon/>}/>
              </List>
            </Collapse>
            <Divider/>
            <ListItemLink to="/Facturas" icon={<ReceiptIcon />} />
            <Divider/>
            <ListItem button onClick = {handleClick} className={clsx(classes.item, classes.itemActiveItem, classes.categoryHeader)}>
              <ListItemIcon> <FolderIcon/> </ListItemIcon>
              <ListItemText primary='Registros'/>
                {open ? <ExpandLess /> : <ExpandMore/>}
            </ListItem>
            <Collapse component="div" in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink to="/Registro_Cliente" className={classes.nested} icon ={<FolderSharedTwoToneIcon/>}/>
                <ListItemLink to="/Registro_Camaronera" className={classes.nested} icon ={<DirectionsBoatTwoToneIcon/>}/>
                <ListItemLink to="/Registro_Operador" className={classes.nested} icon ={<ContactsTwoToneIcon/>}/>
                <ListItemLink to="/Registro_Cosechadora" className={classes.nested} icon ={<AirportShuttleTwoToneIcon/>}/>
              </List>
            </Collapse>
            <Divider/>
            <ListItem button onClick = {handleClick2} className={clsx(classes.item, classes.itemActiveItem, classes.categoryHeader)}>
            <ListItemIcon> <ImportContactsIcon/> </ListItemIcon>
            <ListItemText primary='Formularios'/>
              {open2 ? <ExpandLess /> : <ExpandMore/>}
            </ListItem>
            <Collapse component="div" in={open2} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink to="/Formulario_de_Cosecha" className={classes.nested} icon ={<EventNoteTwoToneIcon/>}/>
                <ListItemLink to="/Formulario_de_transferencia" className={classes.nested} icon ={<EventNoteTwoToneIcon/>}/>
              </List>
            </Collapse>
            <Divider/>

            <ListItemLink TITLE = "Settings" open={open} onclick={handleClick} icon={<SettingsIcon />}/>

          </List>
          
      </div>
    </MemoryRouter>
  );
}
