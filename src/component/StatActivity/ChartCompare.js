import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [],
  datasets: [
    {
      label: "Beat",
      backgroundColor: [
        "#4d4c7d",
        "#fb7b6b",
        "#d7385e",
        "#4d4c7d",
        "#fb7b6b",
        "#d7385e",
        "#4d4c7d",
        "#fb7b6b",
        "#d7385e",
      ],
      highlightFill: "yellow",
      borderColor: "white",
      borderWidth: 2,
      barPercentage: 0.4,
      data: [],
    },
  ],
};
class ChartCompare extends Component {
  state = {
    activitiesData: this.props.activities,
    friendFollowerData: this.props.friendFollowerData,
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({ activitiesData: nextProps.activities });
  }
  render() {
    const { activitiesData, friendFollowerData } = this.state;

    var result = [];
    let userId = [];
    let totalDistance = [];
    activitiesData.reduce(function (res, value) {
      if (!res[value.userId]) {
        res[value.userId] = { userId: value.userId, totalDistance: 0 };
        result.push(res[value.userId]);
      }
      res[value.userId].totalDistance += value.totalDistance;
      return res;
    }, {});

    result.forEach((activity) => {
      friendFollowerData.forEach((data) => {
        if (activity.userId === data.userId) {
          userId.push(data.firstName);
          totalDistance.push(activity.totalDistance.toFixed(2));
        }
      });
    });
    data["labels"] = userId;
    data["datasets"][0].data = totalDistance;
    return (
      <div className="pl-5 pr-5">
        <Bar
          data={data}
          width={10}
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            tooltips: {
              displayColors: false,
              titleFontSize: 16,
              bodyFontSize: 14,
              xPadding: 10,
              yPadding: 10,
              callbacks: {
                label: (tooltipItem, data) => {
                  return `${tooltipItem.value} Km`;
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default ChartCompare;
