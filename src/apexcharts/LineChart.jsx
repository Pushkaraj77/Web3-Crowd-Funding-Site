import { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
    constructor(props) {
      super(props);
      // console.log(props)
      this.state = {
      
        series: [{
            data: [8106, 8205,8304,8428,8537,8630,8730,8820,8936,9012,9194,9240]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            id: 'areachart-2',
            toolbar: {
                show: false,
            }
          },
          annotations: {
            yaxis: [{
              y: 8200,
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Epilogue, Arial, sans-serif',
                  color: '#fff',
                  background: '#00E396',
                },
                text: 'Support',
              }
            }, {
              y: 8600,
              y2: 9000,
              borderColor: '#000',
              fillColor: '#FEB019',
              opacity: 0.2,
              label: {
                borderColor: '#333',
                style: {
                  fontSize: '12px',
                  fontFamily: 'Epilogue, Arial, sans-serif',
                  color: '#333',
                  background: '#FEB019',
                },
                text: 'Y-axis range',
              }
            }],
            xaxis: [{
              x: new Date('23 Nov 2015').getTime(),
              strokeDashArray: 0,
              borderColor: '#775DD0',
              label: {
                borderColor: '#775DD0',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Epilogue, Arial, sans-serif',
                  color: '#fff',
                  background: '#775DD0',
                },
                text: 'Anno Test',
              }
            }, {
              x: new Date('26 Nov 2017').getTime(),
              x2: new Date('28 Nov 2018').getTime(),
              fillColor: '#B3F7CA',
              opacity: 0.4,
              label: {
                borderColor: '#B3F7CA',
                style: {
                  fontSize: '12px',
                  fontFamily: 'Epilogue, Arial, sans-serif',
                  color: '#fff',
                  background: '#00E396',
                },
                offsetY: -10,
                text: 'X-axis range',
              }
            }],
            points: [{
              x: new Date('01 Dec 2017').getTime(),
              y: 8607.55,
              marker: {
                size: 8,
                fillColor: '#fff',
                strokeColor: 'red',
                radius: 2,
                cssClass: 'apexcharts-custom-class'
              },
              label: {
                borderColor: '#FF4560',
                offsetY: 0,
                style: {
                    fontSize: '12px',
                    fontFamily: 'Epilogue, Arial, sans-serif',
                  color: '#fff',
                  background: '#FF4560',
                },
          
                text: 'Point Annotation',
              }
            }]
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          grid: {
            padding: {
              right: 30,
              left: 20
            }
          },
          title: {
            text: 'Donations Graph',
            align: 'center',
            style: {
                fontFamily: 'Epilogue, Arial, sans-serif',
                color: '#9a9aa3',
            },
          },
          xaxis: {
            type: 'datetime',
            categories: ['12 Jan 2013', '12 Feb 2014', '12 March 2015', '12 April 2015', '12 May 2016',
            '12 June 2016', '12 July 2017', '12 Aug 2018', '12 Sept 2019', '12 Oct 2020', '12 Nov 2021', '12 Dec 2022' ],
            labels: {
                show: true,
                style: {
                    colors: '#9a9aa3',
                },
            },
          },
          yaxis:[{
            labels: {
                show: true,
                style: {
                 colors: '#9a9aa3',
                },
            },
          }],
        },
      };
    }


    render() {
      return (
        <div>
          <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default LineChart;