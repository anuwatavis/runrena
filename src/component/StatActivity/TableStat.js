import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";

class TableStat extends Component {
  state = {
    activities: null,
    averageStat: null,
  };
  average = (activities) => {
    let distanceSum = 0;
    let timeSum = 0;
    let elevGain = 0;
    let averageStat = {};
    averageStat["runningCount"] = activities.length;
    activities.forEach((activity) => {
      distanceSum = distanceSum + activity.totalDistance;
      timeSum = timeSum + activity.totalTime;
      elevGain = elevGain + activity.averageElevation;
    });
    averageStat["avgDistance"] = distanceSum / 7;
    averageStat["avgTime"] = timeSum / 7;
    averageStat["Time"] = timeSum;
    averageStat["Elevation"] = elevGain;
    averageStat["totalDistance"] = distanceSum;
    return averageStat;
  };

  async componentDidMount() {
    const response = await axios
      .get(`https://us-central1-runrena-b3aa5.cloudfunctions.net/hello/customers`, {
        params: {
          id: this.props.userId,
        },
      })
      .then((res) => {
        const activities = res.data;
        const averageStat = this.average(activities);
        this.setState({ activities: activities, averageStat: averageStat });
      });
  }
  render() {
    const { averageStat } = this.state;
    return (
      <div>
        <Table size="sm">
          <tbody>
            <tr>
              <th scope="row" className="text-info">
                Last 4 Weeks
              </th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Avg Distance / Week</th>
              {averageStat ? <td>{averageStat.avgDistance.toFixed(2)} Km</td> : <td>loading</td>}
            </tr>
            <tr>
              <th scope="row">Avg Time / Week</th>
              {averageStat ? <td>{averageStat.avgTime.toFixed(2)} min</td> : <td>loading</td>}
            </tr>
            <tr>
              <th scope="row">Avg Runs / Week</th>
              {averageStat ? <td>{averageStat.runningCount} runs</td> : <td>loading</td>}
              <td></td>
            </tr>
            <tr>
              <th scope="row" className="text-info">
                Estimated Best Efforts
              </th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">1 K</th>
              <td>4:17 mins</td>
            </tr>
            <tr>
              <th scope="row">5 K</th>
              <td>25.16 mins</td>
            </tr>
            <tr>
              <th scope="row">Time</th>
              {averageStat ? <td>{averageStat.Time.toFixed(2)} mins</td> : <td>loading</td>}
            </tr>
            <tr>
              <th scope="row">Elev Gain</th>
              {averageStat ? <td>{averageStat.Elevation} m</td> : <td>loading</td>}
            </tr>
            <tr>
              <th scope="row">Run</th>
              {averageStat ? <td>{averageStat.runningCount}</td> : <td>loading</td>}
            </tr>
            <tr>
              <th scope="row" className="text-info">
                All-Time
              </th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Distance</th>
              {averageStat ? <td>{averageStat.totalDistance.toFixed(2)} km</td> : <td>loading</td>}
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableStat;
