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
export default function Registro_Usuario() {
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
            <Grid item xs={6} >
                <FormControl>
                    <InputLabel htmlFor = "user"> Nombre</InputLabel>
                    <Input id = "user" type = "user" aria-describedby="user-helper"/>
                    <FormHelperText id="user-helper">  Nombre completo </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "fnm"> </InputLabel>
                    <Input id = "fnm" type = "date" aria-describedby="bornDate-helper"/>
                    <FormHelperText id="bornDate-helper"> Registra tu fecha de nacimiento </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "tlf"> Teléfono</InputLabel>
                    <Input id = "tlf" type = "teléfono" aria-describedby="teléfono-helper"/>
                    <FormHelperText id="teléfono-helper"> Ingrese su número de teléfono </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "cel"> Celular</InputLabel>
                    <Input id = "cel" type = "teléfono" aria-describedby="celular-helper"/>
                    <FormHelperText id="teléfono-helper"> Ingrese su número de celular </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "email"> Email</InputLabel>
                    <Input id = "email" type = "email" aria-describedby="email-helper"/>
                    <FormHelperText id="email-helper"> Registra tu email (Empresa)</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "user"> Usuario</InputLabel>
                    <Input id = "user" type = "user" aria-describedby="user-helper"/>
                    <FormHelperText id="user-helper"> Registra nombre de usuario </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "pwd"> Contraseña</InputLabel>
                    <Input id = "pwd" type = "password" aria-describedby="password-helper"/>
                    <FormHelperText id="password-helper">(Entre 4 y 8 caracteres)</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "pwd"> Confirmar contraseña</InputLabel>
                    <Input id = "pwd" type = "password" aria-describedby="password-helper"/>
                    <FormHelperText id="password-helper"> Verifique su contraseña</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "txt"> Cargo </InputLabel>
                    <Input id = "txt" type = "text" aria-describedby="txt-helper"/>
                    <FormHelperText id="txt-helper"> Cargo del empleado </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <InputLabel htmlFor = "txt"> Camaronera</InputLabel>
                    <Input id = "txt" type = "text" aria-describedby="txt-helper"/>
                    <FormHelperText id="txt-helper"> Nombre de la camaronera</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={4} align = 'right'>
                <Button variant = "contained" className={classes.root.background}>
                    Registrar
                </Button>
            </Grid>
            <Grid item xs={6} align = 'right'>
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

