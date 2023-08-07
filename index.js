// Penyebab Kematian di Indonesia
async function getData1() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/1HECTWS27b0xAj0f0vS5jV_M7KUKS4NlIjQ-bavx92L8/export?format=csv&id=1HECTWS27b0xAj0f0vS5jV_M7KUKS4NlIjQ-bavx92L8&gid=996113338');
    const data = await response.text();
    return data;
}

async function drawChart1() {
    const rawData = await getData1();
    const rows = rawData.split('\n');
    const labels = rows[0].split(',');
    const datasets = [];

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const type = row[0];
        const data = row.slice(1).map(Number);

        datasets.push({
            label: type,
            data: data,
            backgroundColor: getRandomColor(),
        });
    }

    const ctx = document.getElementById('chart1').getContext('2d');
    const chart1 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels.slice(1),
            datasets: datasets,
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Penyebab Kemtian di Indonesia'
                }
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Tahun'
                    }
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Jumlah Kematian'
                    }
                }
            }
        }
    });
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Kematian di Indonesia Berdasarkan Tahun dan Tipe
async function getData2() {
    const response = await fetch('https://docs.google.com/spreadsheets/d/1HECTWS27b0xAj0f0vS5jV_M7KUKS4NlIjQ-bavx92L8/export?format=csv&id=1HECTWS27b0xAj0f0vS5jV_M7KUKS4NlIjQ-bavx92L8&gid=2063967033');
    const data = await response.text();
    return data;
}

async function drawChart2() {
    const rawData = await getData2();
    const rows = rawData.split('\n');
    const labels = rows[0].split(',');
    const datasets = [];

    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const type = row[0];
        const data = row.slice(1).map(Number);

        datasets.push({
            label: type,
            data: data,
            backgroundColor: getRandomColor(),
        });
    }

    const ctx = document.getElementById('chart2').getContext('2d');
    const chart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels.slice(1),
            datasets: datasets,
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Kematian di Indonesia Berdasarkan Tahun dan Tipe'
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Tahun'
                    }
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Jumlah Kematian'
                    }
                }
            }
        }
    });
}


drawChart1();
drawChart2();