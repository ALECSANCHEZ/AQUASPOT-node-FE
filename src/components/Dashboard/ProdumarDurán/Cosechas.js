import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  CardHeader,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';


import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';


import PropTypes from 'prop-types';


import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';


import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const orders = [
  {
    id: uuid(),
    Libras: '54300',
    camarón: {
      Peso: '23'
    },
    createdAt: 1555016400000,
    TamañoPiscina: '10',
    Duracion: 30.5
  },
  {
    id: uuid(),
    Libras: '54300',
    camarón: {
      Peso: '23'
    },
    createdAt: 1555016400000,
    TamañoPiscina: '10',
    Duracion: 30.5
  },
  {
    id: uuid(),
    Libras: '52300',
    Duracion: 25.1,
    camarón: {
      Peso: '22'
    },
    createdAt: 1555016400000,
    TamañoPiscina: '5'
  },
  {
    id: uuid(),
    Libras: '52500',
    Duracion: 10.99,
    camarón: {
      Peso: '25'
    },
    createdAt: 1554930000000,
    TamañoPiscina: '12'
  },
  {
    id: uuid(),
    Libras: '75000',
    Duracion: 96.43,
    camarón: {
      Peso: '15'
    },
    createdAt: 1554757200000,
    TamañoPiscina: '8'
  },
  {
    id: uuid(),
    Libras: '35000',
    Duracion: 32.54,
    camarón: {
      Peso: '14'
    },
    createdAt: 1554670800000,
    TamañoPiscina: '20'
  },
  {
    id: uuid(),
    Libras: '56000',
    Duracion: 16.76,
    camarón: {
      Peso: '16'
    },
    createdAt: 1554670800000,
    TamañoPiscina: '10'
  }
].sort((a, b) => (a.calories < b.calories ? -1 : 1));


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    
    maxWidth: 750,
  },
}));
export default function Cosechas(){
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, orders.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return(
  <div className={classes.root}>
  <Paper className={classes.paper} square>
  <Grid container spacing={2}>
  <Grid item xs={12} sm container>
    <CardHeader title="Cosechas" />
    <PerfectScrollbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                TOTAL (Lbs)
              </TableCell>
              <TableCell align="center">
                Peso Camarón (g)
              </TableCell>
              <TableCell align="center">
                Tamaño Piscina (Ha)
              </TableCell>
              <TableCell align="center">
                Duración (H)
              </TableCell>
              <TableCell sortDirection="desc" align="center">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {(rowsPerPage > 0
            ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : orders
          ).map((order) =>  (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell align="center">
                  {order.Libras}
                </TableCell>
                <TableCell align="center">
                  {order.camarón.Peso}
                </TableCell>
                <TableCell align="center">
                <Chip
                    color="primary"
                    label={order.TamañoPiscina}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                <Chip
                    color="secondary"
                    label={order.Duracion}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  {moment(order.createdAt).format('DD/MM/YYYY')}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
            )}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={7}
              count={orders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        </Table>
    </PerfectScrollbar>
    </Grid>
    </Grid>
  </Paper>
  </div>
);
}