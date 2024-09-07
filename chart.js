<script>
    document.addEventListener('DOMContentLoaded', function() {
        var ctx = document.getElementById('solarChart').getContext('2d');
        var solarChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2024', '2025', '2026'],
                datasets: [{
                    label: 'Solar Power Capacity (MW)',
                    data: [50, 1000, 2000],
                    borderColor: '#2a9134',
                    backgroundColor: 'rgba(42, 145, 51, 0.2)',
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Capacity (MW)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        });
    });
</script>
