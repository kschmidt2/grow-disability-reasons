// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].className += " strong";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: -1
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1jurAvrn3R40j-lLip_gNRCkmz_66d_H64CM9pi9whFw'
        },
        plotOptions: {
            series: {
                groupPadding: 0.1
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 30
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function () {
                return this.y + '%';
            }
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    tickAmount: 4
                }
              }
            }]
        }
    });
    const myChart2 = Highcharts.chart('chart-container-2', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: -1
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1jurAvrn3R40j-lLip_gNRCkmz_66d_H64CM9pi9whFw',
            googleSpreadsheetWorksheet: 2
        },
        plotOptions: {
            series: {
                groupPadding: 0.1
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 30
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function () {
                return this.y + '%';
            }
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
                yAxis: {
                    tickAmount: 4
                }
              }
            }]
        }
    });
});