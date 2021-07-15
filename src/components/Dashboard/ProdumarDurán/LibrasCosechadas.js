import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const data = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Libras Cosechadas'
    },
    xAxis: {
        title:{
            text: 'MESES'
        },
        allowDecimals: false,
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio'],
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
        pointFormat: '{series.name} ha cosechado <b>{point.y:,.0f}</b><br/> kilogramos en este mes'
    },
    
    
    series: [{
        name: 'Piscina 1',
        data: [ 24826, 21004, 13076, 11009, 10871, 4368]
    },{
        name: 'Piscina 2',
        data: [ 12345, 67890, 13579, 24679, 57890, 46371]
    },{
        name: 'Piscina 3',
        data: [ 123, 678, 1379, 13679, 67890, 86371]
    }]
};


export default class LibrasCosechadas extends React.Component{
    render(){
        return(
            <HighchartsReact
                highcharts={Highcharts}
                options = {data}
            />
        )
    }
}