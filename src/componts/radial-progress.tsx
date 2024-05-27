import React from "react";
import Chart from "react-apexcharts";

interface RadialBarProps {}

interface RadialBarState {
  series: number[];
  options: ApexCharts.ApexOptions;
}

class RadialProgress extends React.Component<RadialBarProps, RadialBarState> {
  constructor(props: RadialBarState) {
    super(props);

    this.state = {
      series: [20, 49, 70],
      options: {
        colors: ["#563BFF", "#FF7049", "#20C997"],
        legend: {
          show: false,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          floating: false,
          width: undefined,
          height: undefined,
          formatter: undefined,
          offsetX: 0,
          offsetY: 50,

          itemMargin: {
            horizontal: 20,
            vertical: 5,
          },
          onItemClick: {
            toggleDataSeries: true,
          },
          onItemHover: {
            highlightDataSeries: true,
          },
        },
        plotOptions: {
          radialBar: {
            inverseOrder: false,
            startAngle: 0,
            endAngle: 360,
            offsetX: 0,
            offsetY: 0,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined,
              imageWidth: 150,
              imageHeight: 150,
              imageOffsetX: 0,
              imageOffsetY: 0,
              imageClipped: true,
              position: "front",
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5,
              },
            },

            dataLabels: {
              show: false,
              name: {
                show: false,
                fontFamily: undefined,
                color: undefined,
                offsetY: -10,
              },
              value: {
                show: false,
                fontSize: "16px",
                fontFamily: undefined,
                color: undefined,
                offsetY: 16,
                formatter: function (val: number | string) {
                  return val + "%";
                },
              },
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          width="300"
        />
      </div>
    );
  }
}

export default RadialProgress;
