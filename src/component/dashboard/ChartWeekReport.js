import React, { Component } from "react";
import { Card, CardFooter, CardBody, CardTitle } from "reactstrap";
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
var options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          min: 0,
        },
      },
    ],
  },
};
class ChartWeekReport extends Component {
  state = {
    activitiesData: this.props.activities,
  };
  render() {
    const { activitiesData } = this.state;
    var result = [];
    let daysLabels = [];
    let totalDistance = [];
    let newActivity = [];
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // console.log(activitiesData);
    activitiesData.forEach((activity) => {
      var today = new Date(activity.createdAt["seconds"] * 1000);
      var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      activity["day"] = new Date(date).getDay();
      newActivity.push(activity);
    });

    newActivity.reduce(function (res, value) {
      if (!res[value.day]) {
        res[value.day] = { days: value.day, totalDistance: 0 };
        result.push(res[value.day]);
      }
      res[value.day].totalDistance += value.totalDistance;
      return res;
    }, {});

    result.forEach((activity) => {
      daysLabels.push(daysOfWeek[activity.days]);
      totalDistance.push(activity.totalDistance.toFixed(2));
    });

    data["labels"] = daysLabels;
    data["datasets"][0].data = totalDistance;

    return (
      <div>
        <Card className="athelete-week-report">
          <CardBody className="text-center">
            <CardTitle>
              <h4>Week Report</h4>
            </CardTitle>
            <Bar data={data} width={150} height={150} options={options} />
          </CardBody>
          <CardFooter>
            <div className="card-section">
              <div className="text-label text-small"></div>
              <div className="text-small"></div>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}
export default ChartWeekReport;
