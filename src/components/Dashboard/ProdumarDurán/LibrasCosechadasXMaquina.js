import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const data = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Libras Cosechadas por Maquina'
    },
    subtitle: {
        text: 'Cosechadoras'
    },
    xAxis: {
        categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Horas (hrs)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        name: 'Cosechadoras',
        data: [59.9, 42.5, 49.4, 50.2, 51.3, 69.3, 57.6]
    }]
};

export default class LibrasCosechadasXMaquina extends React.Component{
    render(){
        return(
            <HighchartsReact
                highcharts={Highcharts}
                options = {data}
            />
        )
    }
}