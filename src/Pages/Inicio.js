import React from 'react';
import clsx from 'clsx';

import Paper from '@material-ui/core/Paper';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import { Helmet } from 'react-helmet';
import {Box,Container,Grid, Typography} from '@material-ui/core';


import Products from '../components/Inicio/Products.js';
import Maquinas from '../components/Inicio/Maquinas.js';
import Publicidad from '../components/Inicio/Publicidad.js';
import Products2 from '../components/Inicio/Products2';


function Aquaspot(){
    return (
        <Typography variant = "body2" color ="textSecondary" align = "center">
            {'Aquaspot Ⓐ '}
            <Link color = "inherit" href = "https://google.com/">
                Your Web
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
  };
  
  const useStyles = makeStyles((theme) =>({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
    }));
  function Inicio(){
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return(
      <>
      <Helmet>
      <title>ProdumarDuran | Material Kit</title> 
      </Helmet>
      <Box
        sx={{
          minHeight: 'auto',
          py: 3
        }}
        classes={{root: classes.root}}
      >
          <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item lg={8}>
                  <Publicidad/>
                </Grid>
                <Grid item lg={4}>
                  <Maquinas/>
                </Grid>
                <Grid item lg={14}>
                  <Products2/>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper className={fixedHeightPaper}>
                
                  </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper className={fixedHeightPaper}>
                
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                
                  </Paper>
                </Grid>
                <Grid item lg={4}>
                  <Products/>
                </Grid>
              </Grid>
              <Box pt={4}>
                <Aquaspot />
              </Box>
              </Container>
      </Box>
    </>
  );
      };
  
  export default Inicio;