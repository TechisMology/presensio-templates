import Chart from 'chart.js/auto';

// Brutalist Design Tokens (can be matched with CSS variables if needed)
const brutalistColors = {
  primary: '#0d6efd',
  warning: '#ffc107',
  success: '#198754',
  danger: '#dc3545',
  info: '#0dcaf0',
  black: '#000000',
  white: '#ffffff',
  background: '#f8f9fa'
};

// Global Chart.js Defaults for Brutalist Theme
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.weight = 'bold';
Chart.defaults.color = brutalistColors.black;
Chart.defaults.plugins.tooltip.backgroundColor = brutalistColors.black;
Chart.defaults.plugins.tooltip.titleFont = { family: "'Inter', sans-serif", weight: 'bold', size: 14 };
Chart.defaults.plugins.tooltip.bodyFont = { family: "'Inter', sans-serif", weight: 'normal', size: 13 };
Chart.defaults.plugins.tooltip.cornerRadius = 0; // Sharp corners
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.plugins.legend.labels.font = { family: "'Inter', sans-serif", weight: 'bold' };
Chart.defaults.plugins.legend.labels.color = brutalistColors.black;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Bar Chart
  const barCtx = document.getElementById('brutalistBarChart');
  if (barCtx) {
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue',
          data: [1200, 1900, 3000, 5000, 2400, 3200],
          backgroundColor: brutalistColors.primary,
          borderColor: brutalistColors.black,
          borderWidth: 2,
          hoverBackgroundColor: '#0b5ed7',
          borderRadius: 0, // Sharp corners
        },
        {
          label: 'Expenses',
          data: [800, 1500, 2000, 2500, 1800, 2100],
          backgroundColor: brutalistColors.warning,
          borderColor: brutalistColors.black,
          borderWidth: 2,
          borderRadius: 0,
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              color: brutalistColors.black,
              lineWidth: 1,
              drawBorder: true,
              drawTicks: true,
            },
            ticks: {
              font: { weight: 'bold' }
            }
          },
          y: {
            grid: {
              color: brutalistColors.black,
              lineWidth: 1,
              drawBorder: true,
            },
            ticks: {
              font: { weight: 'bold' }
            },
            beginAtZero: true
          }
        }
      }
    });
  }

  // 2. Line Chart
  const lineCtx = document.getElementById('brutalistLineChart');
  if (lineCtx) {
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Active Users',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: brutalistColors.black,
          borderWidth: 4, // Thicker line for brutalist look
          tension: 0, // Sharp angles, no bezier curves
          pointBackgroundColor: brutalistColors.success,
          pointBorderColor: brutalistColors.black,
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              color: '#dee2e6', // Lighter grid for contrast
              lineWidth: 1,
            }
          },
          y: {
            grid: {
              color: '#dee2e6',
              lineWidth: 1,
            },
            beginAtZero: true
          }
        }
      }
    });
  }

  // 3. Doughnut Chart
  const doughnutCtx = document.getElementById('brutalistDoughnutChart');
  if (doughnutCtx) {
    new Chart(doughnutCtx, {
      type: 'doughnut',
      data: {
        labels: ['Direct', 'Social', 'Referral'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
            brutalistColors.danger,
            brutalistColors.primary,
            brutalistColors.warning
          ],
          borderColor: brutalistColors.black,
          borderWidth: 2,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          }
        },
        cutout: '60%',
        layout: {
          padding: 10
        }
      }
    });
  }
});
