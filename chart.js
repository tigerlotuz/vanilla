let vanillaChart = document.getElementById("vanillaChart").getContext("2d");

//Global options
Chart.defaults.font.family = "Roboto";
Chart.defaults.font.size = 18;
Chart.defaults.font.color = "#131313";
Chart.defaults.layout.padding = 32;

// type: bar, horizontalBar, pie, doughnut, radar, polarArea
let chart = new Chart(vanillaChart, {
  type: "bar",
  data: {
    labels: [
      "Falkenberg",
      "Halmstad",
      "Hylte",
      "Kungsbacka",
      "Laholm",
      "Varberg",
    ],
    datasets: [
      {
        label: "Population",
        data: [46051, 103754, 10649, 84930, 25967, 65397],
        // backgroundColor: 'green',
        backgroundColor: [
          "rgb(122, 160, 203)",
          "rgb(147, 179, 207)",
          "rgb(193, 209, 219)",
          "rgb(174, 198, 207)",
          "rgb(150, 189, 198)",
          "rgb(133, 178, 187)",
        ],
        borderColor: "#777",
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 1.5,
    maintainAspectRatio: true,

    plugins: {
      title: {
        display: true,
        text: "Population of Halland",
        font: {
          size: 32,
        },
        padding: {
          top: 16,
          bottom: 32,
        },
      },
      legend: {
        align: "end",
        labels: {
          color: "green",
        },
      },
      tooltip: {
        padding: 16,
      },
    },
    layout: {
      // padding: 20,
      padding: {
        top: 32,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    elements: {
      bar: {
        borderRadius: 5,
      },
    },
  },
});
