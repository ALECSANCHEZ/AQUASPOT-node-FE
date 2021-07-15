import './App.css';
import React from 'react';
import clsx from 'clsx';
import {grey} from '@material-ui/core/colors';
import {fade, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import ListItems from './listItems.js'; // HACE UNA IMPORTACION DE LAS 
import IMAGEN from './img/Imagen.js';


import {useHistory} from "react-router-dom";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProdumarDuran from './Pages/ProdumarDuran.js';
import ProdumarTaura from './Pages/ProdumarTaura.js';
import Inicio from './Pages/Inicio.js';
import Registro_CLIENTE from './components/formularios/Registro_CLIENTE.js';
import Registro_Camaronera from './components/formularios/Registro_Camaronera.js';
import Registro_Operador from './components/formularios/Registro_Operador.js';
import Registro_Cosechadora from './components/formularios/Registro_Cosechadora.js';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#212121', //Cambia el color del menú de opciones
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>({
    tabs: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      marginLeft: 1,
    },
    search: {
      position: 'relative',
      flexGrow: 1,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '17.5ch',
      '&:focus': {
        width: '33ch',
      },
    },
  },
    root: {
        display: 'flex',
    },
    toolbar:{
        paddingRight:24, //keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar:{
        height:'7%',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width','margin'],{
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift:{
        marginLeft: drawerWidth,
        height:'7%',
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width','margin'],{
            easing:theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    drawerPaper: {
      color : 'primary',
      position: 'relative',
      whiteSpace: 'nowrap',            
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      color : 'primary',
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
      width: theme.spacing(6.4),
        },
      },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      maxWidth:'400vh',
      height: '100vh',
      overflow: 'auto',
      background: 'linear-gradient(45deg, #eceff1 70%, #212121 100%)',
      },
    }));

function App(props) {
  
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [open,setOpen]= React.useState(true);
  const [anchorEl,setAnchorEl] = React.useState(null);
  const op = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
        setOpen(true);
    };
  const handleDrawerClose = () =>{
        setOpen(false);
    };
  let history = useHistory();
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div className={classes.root}>
      <CssBaseline />
        <AppBar position="absolute" color ="#fafafa" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
                <MenuIcon />
            </IconButton>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar transacciones, facturas, ayuda…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <IconButton color="inherit" >
                <Badge variant="dot" color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton>
            <Box p={0.5} component="h1" variant="h6" color="inherit" noWrap className={classes.tabs} >
            <Typography>
              Produmar
            <IconButton color = "inherit">
            <ArrowDropDownIcon />
            </IconButton>
            </Typography>
            </Box>
            {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={op}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}> SIGN IN</MenuItem>
                <button onClick={() => {history.push("/SignInSide");}}>
                  SIGN IN
                  </button>
              </Menu>
            </div>
          )}
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon style={{color:grey[50]}}/>
                </IconButton>
            </div>
            <div><IMAGEN/></div>
            <ListItems/>
        </Drawer>
        <Switch>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Route path= "/Inicio">
            <Inicio/>
          </Route>
          <Route path= "/ProdumarDuran">
           <ProdumarDuran/>
          </Route>
          <Route path= "/ProdumarTaura">
            <ProdumarTaura/>
          </Route>
          <Route path= "/Registro_CLIENTE">
            <Registro_CLIENTE/>
          </Route>   
          <Route path= "/Registro_Camaronera">
            <Registro_Camaronera/>
          </Route>
          <Route path= "/Registro_OPERADOR">
            <Registro_Operador/>
          </Route>
          <Route path= "/Registro_Cosechadora">
            <Registro_Cosechadora/>
          </Route>
        </main>
        </Switch>
    </div>
    </Router>
    </ThemeProvider>
  );
}
export default App;





