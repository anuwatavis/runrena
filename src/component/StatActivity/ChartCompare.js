import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [],
  datasets: [
    {
      label: "Your Beat",
      backgroundColor: "salmon",
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
  };
  render() {
    const { activities } = this.props;
    var result = [];
    let name = [];
    let totalDistance = [];
    activities.reduce(function (res, value) {
      if (!res[value.userId]) {
        res[value.userId] = { userId: value.userId, totalDistance: 0 };
        result.push(res[value.userId]);
      }
      res[value.userId].totalDistance += value.totalDistance;
      return res;
    }, {});

    result.forEach((activity) => {
      name.push(activity.userId);
      totalDistance.push(activity.totalDistance);
    });

    data["labels"] = name;
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
            color: ["red", "green", "red", "green", "red", "green", "red", "green"],
          }}
        />
      </div>
    );
  }
}

export default ChartCompare;
