import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
//import CoseVv_Query from 'C:/PROYECTO-1/reactpixabay/FrontEnd/src/queries/CoseVv_Query.js';
const data = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Cosechas en VIVO!!!'
    },
    subtitle: {
        text: 'Cosechadora propia 2'
    },
    xAxis: {
        title:{
            text: 'HORAS DURANTE EL DIA'
        },
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        },
        accessibility: {
            rangeDescription: 'Range: 17:00 to 24:00.'
        }
    },
    yAxis: {
        title: {
            text: 'KILOGRAMOS'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} ha cosechado <b>{point.y:,.0f}</b><br/> kg en {point.x} horas'
    },
    plotOptions: {
        area: {
            pointStart: 17 ,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    
    series: [{
        name: 'Piscina 1 - 7',
        data: [ 24826, 21004, 13076, 11009, 10871, 4368]
    }]
};


export default class CosechasEnVivo2 extends React.Component{
    render(){
        return(
            <HighchartsReact
                highcharts={Highcharts}
                options = {data}
            />
        )
    }
}