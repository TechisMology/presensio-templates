import Chart from "chart.js/auto";

// Colors based on Kemenag template and the reference image
const colors = {
  primary: "#08783a",
  primarySoft: "rgba(8, 120, 58, 0.1)",
  gray: "#d1d5db",
  graySoft: "rgba(209, 213, 219, 0.3)",
  blue: "#2563eb",
  yellow: "#f59e0b",
  purple: "#9333ea",
};

// Global Defaults
Chart.defaults.font.family = "'Poppins', sans-serif";
Chart.defaults.font.weight = "500";
Chart.defaults.color = "#9ca3af"; // text-muted
Chart.defaults.scale.grid.color = "#f3f4f6"; // very light grid


  // 1. Analytics Overview (Line Chart)
  const ctxAnalytics = document.getElementById("chart-analytics-overview");
  if (ctxAnalytics) {
    new Chart(ctxAnalytics, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "This Year",
            data: [
              2000, 3500, 4200, 4500, 6000, 6500, 6200, 5000, 5300, 4500, 5200,
              4900,
            ],
            borderColor: colors.primary,
            backgroundColor: colors.primarySoft,
            borderWidth: 3,
            tension: 0.4, // Smooth curve
            fill: true,
            pointBackgroundColor: "#fff",
            pointBorderColor: colors.primary,
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
          {
            label: "Last Year",
            data: [
              1000, 2000, 2500, 2800, 3200, 3900, 4210, 3800, 3500, 2800, 3200,
              2900,
            ],
            borderColor: colors.gray,
            backgroundColor: "transparent",
            borderWidth: 2,
            tension: 0.4,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            align: "start",
            labels: {
              usePointStyle: true,
              boxWidth: 8,
              padding: 20,
            },
          },
          tooltip: {
            backgroundColor: "#fff",
            titleColor: "#111827",
            bodyColor: "#374151",
            borderColor: "#e5e7eb",
            borderWidth: 1,
            padding: 12,
            usePointStyle: true,
            callbacks: {
              label: function (context) {
                return (
                  context.dataset.label + ": " + context.raw.toLocaleString()
                );
              },
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
          },
          y: {
            border: { display: false },
            ticks: {
              callback: function (value) {
                return value >= 1000 ? value / 1000 + "K" : value;
              },
            },
          },
        },
      },
    
  }

  // 2. Traffic Sources (Doughnut Chart)
  const ctxTraffic = document.getElementById("chart-traffic-sources");
  if (ctxTraffic) {
    new Chart(ctxTraffic, {
      type: "doughnut",
      data: {
        labels: ["Direct", "Organic Search", "Social Media", "Referral"],
        datasets: [
          {
            data: [11539, 8654, 5769, 2885],
            backgroundColor: [
              colors.primary,
              colors.blue,
              colors.yellow,
              colors.purple,
            ],
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "75%",
        plugins: {
          legend: {
            display: false, // We will use custom HTML legend in a real scenario, but for now we hide it to match the image's split layout. Or we can position it on the right.
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return (
                  " " + context.label + ": " + context.raw.toLocaleString()
                );
              },
            },
          },
        },
      },
    
  }

  // 3. User Growth (Bar Chart)
  const ctxGrowth = document.getElementById("chart-user-growth");
  if (ctxGrowth) {
    new Chart(ctxGrowth, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Users",
            data: [1800, 3000, 3500, 4100, 2200, 2100],
            backgroundColor: colors.primary,
            borderRadius: 4,
            barPercentage: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            grid: { display: false },
          },
          y: {
            border: { display: false },
            ticks: {
              callback: function (value) {
                return value >= 1000 ? value / 1000 + "K" : value;
              },
            },
          },
        },
      },
    
  }

