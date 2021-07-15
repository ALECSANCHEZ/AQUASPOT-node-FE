import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Typography, colors} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Barra_AM from '/src/img/Barra_AM.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'; 


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

export default function TotalLibrasCosechadas() {
  const classes = useStyles();
  const devices = [
    {
        title: '246 k',
        value: 13.8,
        icon: ArrowDownwardIcon,
        color: colors.red[600],
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
                Total Libras Cosechadas
                </Typography>
                {devices.map(({color,icon:Icon,title,value})=>(
                              <Grid item>
                              <Typography color="textPrimary" variant="h5">{title}</Typography>
                              <Typography style={{color}} variant="body1"> <Icon/> {value} % </Typography>
                              </Grid>
                          ))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" align="center"> MENU </Typography>
              <ButtonBase className={classes.image}>
              <img className={classes.img} src={Barra_AM} alt="complex"/>
            </ButtonBase>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}