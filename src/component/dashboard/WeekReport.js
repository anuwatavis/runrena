import React from "react";
import { Card, CardFooter, CardBody, CardTitle } from "reactstrap";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["Monday", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const WeekReport = () => {
  return (
    <div>
      <Card className="athelete-week-report">
        <CardBody className="text-center">
          <CardTitle>
            <h4>Week Report</h4>
          </CardTitle>
          <Bar data={data} width={150} height={150} />
        </CardBody>
        <CardFooter>
          <div className="card-section">
            <div className="text-label text-small">Latest Activity</div>
            <div className="text-small">Afternoon Run • March 1, 2020</div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WeekReport;
