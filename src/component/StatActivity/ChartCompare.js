import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["Anuwat", "John", "Peter", "Natacha", "Tony", "Prayut", "Paiboon", "Teerapong", "Tanapon", "Piyawat"],
  datasets: [
    {
      label: "Your Beat",
      backgroundColor: "salmon",
      borderColor: "white",
      borderWidth: 2,
      barPercentage: 0.4,
      data: [65, 59, 80, 81, 56, 55, 40, 10, 20, 30, 10]
    }
  ]
};
class ChartCompare extends Component {
  render() {
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
                    beginAtZero: true
                  }
                }
              ]
            },
            color: ["red", "green", "red", "green", "red", "green", "red", "green"]
          }}
        />
      </div>
    );
  }
}

export default ChartCompare;
