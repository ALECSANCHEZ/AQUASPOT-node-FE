import React from 'react';
//import './estilos.css'
import {Container, FormControl, InputLabel, Input, FormHelperText, Button, Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

import Aquaspot2 from '../../img/Aquaspot2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #212121 30%, #e0e0e0 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 29,
        padding: '0 30px',
        maxWidth: 750,
    },
    paper: {
      padding: theme.spacing(3),
      maxWidth: 750,
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
export default function Registro_Camaronera() {
    const classes = useStyles();
    return (
        <>
        <Container maxWidth={false} align = 'center'>
            <Paper  className={classes.root} square ></Paper>
            <Paper className={classes.paper} square align = 'center'>
            <Container maxWidth="md">
            <ButtonBase className={classes.image} >
              <img className={classes.img} src={Aquaspot2} alt="complex"/>
            </ButtonBase>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "id"> ID</InputLabel>
                    <Input id = "user" type = "id" aria-describedby="id-helper"/>
                    <FormHelperText id="id-helper"> Registra ID de la Cosechadora </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6} >
                <FormControl>
                    <InputLabel htmlFor = "text"> Marca del motor</InputLabel>
                    <Input id = "text" type = "text" aria-describedby="text-helper"/>
                    <FormHelperText id="text-helper">  Registra la marca </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "grup"> Modelo del motor</InputLabel>
                    <Input id = "grup" type = "text" aria-describedby="grup-helper"/>
                    <FormHelperText id="grup-helper"> Registra el modelo del motor</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "grup"> Marca motor</InputLabel>
                    <Input id = "grup" type = "text" aria-describedby="grup-helper"/>
                    <FormHelperText id="grup-helper"> Registra la marca del motor</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "grup"> Estado</InputLabel>
                    <Input id = "grup" type = "text" aria-describedby="grup-helper"/>
                    <FormHelperText id="grup-helper"> Activo o  Inactivo</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "grup"> Ubicación</InputLabel>
                    <Input id = "grup" type = "text" aria-describedby="grup-helper"/>
                    <FormHelperText id="grup-helper"> Ubicación donde se encuentra</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "grup"> Alias</InputLabel>
                    <Input id = "grup" type = "text" aria-describedby="grup-helper"/>
                    <FormHelperText id="grup-helper"> Alias de la cosechadora</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={3} align = 'right'>
                <Button variant = "contained" className={classes.root.background}>
                    Registrar
                </Button>
            </Grid>
            <Grid item xs={2} align = 'right'>
                <Button variant = "contained" className={classes.root.background}>
                    Borrar
                </Button>
            </Grid>
            </Grid>
            </Container>
            </Paper>
            <Paper  className={classes.root} square></Paper>
            </Container>
        </>
    )
}

