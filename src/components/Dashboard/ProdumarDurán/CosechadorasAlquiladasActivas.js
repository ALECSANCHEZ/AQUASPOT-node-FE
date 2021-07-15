//import moment from 'moment';
import { v4 as uuid } from 'uuid';
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
  //TableSortLabel,
  //Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const orders = [
  {
    id: uuid(),
    Cosechadora: 'Cosechadora 1',
    Ubicación: {
      Piscina: 'Piscina 3'
    },
  },
  {
    id: uuid(),
    Cosechadora: 'Cosechadora 2',
    Ubicación: {
      Piscina: 'Piscina 10'
    },
  },
  {
    id: uuid(),
    Cosechadora: 'Cosechadora 3',
    Ubicación: {
      Piscina: 'Piscina 7'
    },
  },
  {
    id: uuid(),
    Cosechadora: 'Cosechadora 4',
    Ubicación: {
      Piscina: 'Piscina 1'
    },
  },
  {
    id: uuid(),
    Cosechadora: 'Cosechadora 5',
    Ubicación: {
      Piscina: 'Piscina 2'
    },
  },
  {
    id: uuid(),
    Cosechadora: 'Cosechadora 6',
    Ubicación: {
      Piscina: 'Piscina 6'
    },
  }
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 300,
  },
}));
export default function CosechadorasAlquiladasActivas(){
  const classes = useStyles();

  return(
  <div className={classes.root}>
  <Paper className={classes.paper} square>
  <Grid container spacing={2}>
  <Grid item xs={12} sm container>
    <CardHeader title="Cosechadoras Alquiladas Activas" />
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
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell align="center">
                <Chip
                    color="primary"
                    label={order.Cosechadora}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  {order.Ubicación.Piscina}
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