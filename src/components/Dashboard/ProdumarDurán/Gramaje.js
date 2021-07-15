import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import {Box,Typography,colors,useTheme} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import PaperHeader from '@material-ui/core/PaperHeader';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        margin: 'auto',
        maxWidth: 300,
        height: 350,
      },
}));

const Gramaje = (props) =>{
    const theme = useTheme();
    const classes = useStyles();
    const data = {
        datasets:[
            {
               data:[4260, 3970, 3454, 2390],
               backgroundColor: [
                   colors.blue[500],
                   colors.red[400],
                   colors.amber[500],
                   colors.deepPurple[400],
               ],
               borderWidth: 4,
               borderColor: colors.common.white,
               hoverBoderColor: colors.common.white
            }
        ],
        labels: ['15g','20g','23g', 'Otros']
    };
    const options = {
        animation: false,
        cutoutPercentage:60,
        layout:{paddinig: 0},
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor:theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };

    const devices = [
        {
            title: '15g ----------',
            value:'4260 lbs',
            icon: DonutLargeIcon,
            color: colors.blue[500]
        },
        {
            title: '20g ----------',
            value: '3970 lbs',
            icon: DonutLargeIcon,
            color: colors.red[400]
        },
        {
            title: '23g ----------',
            value: '3454 lbs',
            icon: DonutLargeIcon,
            color: colors.amber[500]
        },
        {
            title: 'Otros ----------',
            value: '2390 lbs',
            icon: DonutLargeIcon,
            color: colors.deepPurple[400]
        }
    ];

    return (
        <div className={classes.root}>
        <Paper className = {classes.paper} square>
            <Grid container spacing={12}>
                <Grid item >
                    <Doughnut data={data} options={options}/>
                </Grid>

                <Grid item  xs sm container>
                    <Grid item xs container direction= "row" spacing={4}>
                        <Grid item xs sx= {{
                        display: 'right',
                        justifyContent: 'center',
                        pt:8,
                        position: 'right',
                    }}>
                            {devices.map(({color,icon: Icon,title,value})=>(  
                                <Typography color="textPrimary" variant="body1" align="center">
                                    <Icon style={{color}}/>
                                    {title}
                                    {'         '}
                                    {value}
                                </Typography>
                            ))}
                        </Grid>
                    </Grid>

                
                     
                        <Box
                    sx= {{
                        display: 'right',
                        justifyContent: 'center',
                        pt:8,
                        position: 'right',
                    }}
                    > 
                    </Box>
                    
                    </Grid>
                
                </Grid>
            </Paper>
        </div>
    );
};

export default Gramaje;
