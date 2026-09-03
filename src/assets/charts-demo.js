import Chart from "chart.js/auto";

// Modern Design Tokens & Palette
const themeColors = {
  primary: "#08783a",
  primaryHover: "#059447",
  primaryLight: "#dcfce7",
  secondary: "#6b7280",
  warning: "#f59e0b",
  success: "#16a34a",
  danger: "#ef4444",
  info: "#2563eb",
  dark: "#111827",
  grid: "#f3f4f6",
  border: "#e5e7eb",
};

// Global Chart.js Defaults for Modern Theme
Chart.defaults.font.family = "'Poppins', sans-serif";
Chart.defaults.font.weight = "500";
Chart.defaults.color = "#6b7280";

// Modern Clean Tooltip Defaults
Chart.defaults.plugins.tooltip.backgroundColor = "#ffffff";
Chart.defaults.plugins.tooltip.titleColor = "#111827";
Chart.defaults.plugins.tooltip.bodyColor = "#374151";
Chart.defaults.plugins.tooltip.borderColor = "#e5e7eb";
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.padding = 12;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.boxPadding = 4;
Chart.defaults.plugins.tooltip.titleFont = {
  family: "'Poppins', sans-serif",
  weight: "600",
  size: 13,
};
Chart.defaults.plugins.tooltip.bodyFont = {
  family: "'Poppins', sans-serif",
  weight: "500",
  size: 12,
};

// Legend Defaults
Chart.defaults.plugins.legend.labels.font = {
  family: "'Poppins', sans-serif",
  weight: "600",
  size: 12,
};
Chart.defaults.plugins.legend.labels.color = "#374151";
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyle = "circle";
Chart.defaults.plugins.legend.labels.padding = 16;

document.addEventListener("DOMContentLoaded", () => {
  // 1. Bar Chart — Revenue & Expenses
  const barCtx =
    document.getElementById("modernBarChart") ||
    document.getElementById("brutalistBarChart");
  if (barCtx) {
    new Chart(barCtx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Pendapatan (Revenue)",
            data: [1200, 1900, 3000, 5000, 2400, 3200],
            backgroundColor: themeColors.primary,
            hoverBackgroundColor: themeColors.primaryHover,
            borderRadius: 6,
            barPercentage: 0.6,
            categoryPercentage: 0.6,
          },
          {
            label: "Pengeluaran (Expenses)",
            data: [800, 1500, 2000, 2500, 1800, 2100],
            backgroundColor: "#dbeafe",
            hoverBackgroundColor: "#bfdbfe",
            borderRadius: 6,
            barPercentage: 0.6,
            categoryPercentage: 0.6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            align: "end",
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#9ca3af",
            },
          },
          y: {
            grid: {
              color: themeColors.grid,
            },
            ticks: {
              color: "#9ca3af",
            },
            beginAtZero: true,
          },
        },
      },
    });
  }

  // 2. Line Chart — User Activity Trend
  const lineCtx =
    document.getElementById("modernLineChart") ||
    document.getElementById("brutalistLineChart");
  if (lineCtx) {
    new Chart(lineCtx, {
      type: "line",
      data: {
        labels: [
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
          "Minggu",
        ],
        datasets: [
          {
            label: "Pengguna Aktif",
            data: [65, 59, 80, 81, 56, 75, 90],
            fill: true,
            backgroundColor: "rgba(8, 120, 58, 0.08)",
            borderColor: themeColors.primary,
            borderWidth: 2.5,
            tension: 0.35,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: themeColors.primary,
            pointBorderWidth: 2.5,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: themeColors.primary,
            pointHoverBorderColor: "#ffffff",
          },
          {
            label: "Target",
            data: [50, 55, 60, 65, 70, 75, 80],
            fill: false,
            borderColor: "#d1d5db",
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.35,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            align: "end",
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#9ca3af",
            },
          },
          y: {
            grid: {
              color: themeColors.grid,
            },
            ticks: {
              color: "#9ca3af",
            },
            beginAtZero: true,
          },
        },
      },
    });
  }

  // 3. Doughnut Chart — Traffic Sources
  const doughnutCtx =
    document.getElementById("modernDoughnutChart") ||
    document.getElementById("brutalistDoughnutChart");
  if (doughnutCtx) {
    new Chart(doughnutCtx, {
      type: "doughnut",
      data: {
        labels: ["Organik", "Langsung", "Rujukan", "Sosial"],
        datasets: [
          {
            data: [350, 180, 120, 60],
            backgroundColor: [
              themeColors.primary,
              themeColors.info,
              themeColors.warning,
              themeColors.danger,
            ],
            borderColor: "#ffffff",
            borderWidth: 3,
            hoverOffset: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 12,
            },
          },
        },
        cutout: "70%",
        layout: {
          padding: 8,
        },
      },
    });
  }
});
