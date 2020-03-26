/* function createChart(countriesList, populationList) { */
var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar', /* Chart types: pie, bar, line, radar, horizontalBar, polarArea, doughnut */
    // The data for our dataset
    data: {
        /* labels: countriesList, */
        datasets: [{
            /* data: populationList, */
            backgroundColor: '#036bfc',
            borderColor: 'rgb(055, 000, 000)',
            borderWidth: 1,
            hoverBorderColor: 'red',
            hoverBorderWidth: 3,
            /* Bar properties */
            /* barPercentage: 1,
            barThickness: 40, */
            maxBarThickness: 70,
            /* minBarLength: 50, */
        }],
    },
    // Configuration options go here
    options: {
        title: {
            display: true,
            text: "Population",
            fontSize: 30
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Inhabitants",
                    fontSize: 20,
                    fontColor: 'red'
                }

            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Countries",
                    fontSize: 20,
                    fontColor: 'blue'
                }
            }]
        },
        legend: {
            display: false,
            position: 'right',
            labels: {
                fontColor: '#fc0303'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true,
        }
    }
});

function addChartData(label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeChartData() {
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    });
    chart.update();
}