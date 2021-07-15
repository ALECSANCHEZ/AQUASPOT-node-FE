import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Typography} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Barra_RV from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/img/Barra_RV.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function TallaMásPescada() {
  const classes = useStyles();
  const devices = [
    {
        title: '20 - 30',
    },
];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography color='textSecondary' gutterBottom variant="subtitle1">
                Talla Más Pescada
                </Typography>
                {devices.map(({title})=>(
                              <Grid item>
                              <Typography color="textPrimary" variant="h5">{title}</Typography>
                              </Grid>
                          ))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" align="center" > MENU </Typography>
              <ButtonBase className={classes.image}>
              <img className={classes.img} src={Barra_RV} alt="complex"/>
            </ButtonBase>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}