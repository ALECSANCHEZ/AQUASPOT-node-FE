import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Button,
  CardHeader,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CargarDatos from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/cargarDatos/queries.js'; //IMPORTA LOS DATOS DEL BACK-END
//import { v4 as uuid } from 'uuid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 300,
    
  },
}));

// const orders = [
//   {
//     id: uuid(),
//     Cosechadora: 'Cosechadora 1',
//     Ubicación: {
//       Piscina: 'Piscina 3'
//     },
//   },
//   {
//     id: uuid(),
//     Cosechadora: 'Cosechadora 2',
//     Ubicación: {
//       Piscina: 'Piscina 10'
//     },
//   },
//   {
//     id: uuid(),
//     Cosechadora: 'Cosechadora 3',
//     Ubicación: {
//       Piscina: 'Piscina 7'
//     },
//   },
//   {
//     id: uuid(),
//     Cosechadora: 'Cosechadora 4',
//     Ubicación: {
//       Piscina: 'Piscina 1'
//     },
//   },
//   {
//     id: uuid(),
//     Cosechadora: 'Cosechadora 5',
//     Ubicación: {
//       Piscina: 'Piscina 2'
//     },
//   },
//   {
//     id: uuid(),
//     Cosechadora: 'Cosechadora 6',
//     Ubicación: {
//       Piscina: 'Piscina 6'
//     },
//   }
// ];

export default function CosechadorasPropiasActivas(){
  const classes = useStyles();

  let datos = CargarDatos("http://localhost:4000/CosechadorasPropiasActivas");// SE USA ESTA RUTA PARA GUARDAR LOS DATOS EN UNA VARIBALE

  console.log(datos)
  return(
  <div className={classes.root}>
  <Paper className={classes.paper} square>
  <Grid container spacing={2}>
  <Grid item xs={12} sm container>
    <CardHeader title="Cosechadoras Propias Activas" />
      <PerfectScrollbar>
        <Table spacing={2}>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                Cosechadora  
              </TableCell>
              <TableCell align="center">
                Piscina
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {datos.map((order) => (
               <TableRow
                 hover
                 key={order.employeeNumber}
               >
                 <TableCell align="center">
                 <Chip
                     color="primary"
                     label={order.employeeNumber}
                     size="small"
                   />
                 </TableCell>
                 <TableCell align="center">
                   {order.lastName}
                 </TableCell>
               </TableRow>
             ))}
           </TableBody>
        </Table>
      </PerfectScrollbar>
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Show More
      </Button>
    </Grid>
    </Grid>
    </Grid>
  </Paper>
  </div>
);
}