import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const data = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Tallas Cosechadas'
    },
    subtitle: {
        text: 'Tallas'
    },
    xAxis: {
        categories: [
            '10-20',
            '20-30',
            '30-40',
            '40-50',
            '50-60',
            '60-70',
            '70-80',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Porcentaje (%)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Piscina 1',
        data: [59.9, 42.5, 49.4, 50.2, 51.3, 69.3, 57.6]

    }, {
        name: 'Piscina 2',
        data: [70, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

    }, {
        name: 'Piscina 3',
        data: [44.5, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0]

    }]
};

export default class TallaDeCosecha extends React.Component{
    render(){
        return(
            <HighchartsReact
                highcharts={Highcharts}
                options = {data}
            />
        )
    }
}