import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";
class TableStat extends Component {
  state = {
    activities: null,
    averageStat: null
  };
  average = activities => {
    let distanceSum = 0;
    let timeSum = 0;
    let count = activities.length;
    console.log("TableStat -> count", count);
    let averageStat = {};
    activities.forEach(activity => {
      distanceSum = distanceSum + activity.totalDistance;
      timeSum = timeSum + activity.totalTime;
    });
    averageStat["avgDistance"] = distanceSum / count;
    averageStat["avgTime"] = timeSum / count;
    console.log("TableStat -> averageStat", averageStat);
    return averageStat;
  };

  async componentDidMount() {
    console.log("componentDidMount");
    let averageStat = {};
    const response = await axios
      .get(`https://us-central1-runrena-b3aa5.cloudfunctions.net/hello/customers`, {
        params: {
          id: this.props.userId
        }
      })
      .then(res => {
        const activities = res.data;
        console.log("TableStat -> componentDidMount -> activities", activities);
        const averageStat = this.average(activities);
        this.setState({ activities: activities, averageStat: averageStat });
      });
  }
  render() {
    const { averageStat } = this.state;
    if (averageStat) {
      console.log(averageStat.avgDistance);
    } else {
      console.log("null");
    }
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
              {averageStat ? <td>{averageStat.avgDistance}</td> : <td>loading</td>}
            </tr>
            <tr>
              <th scope="row">Avg Time / Week</th>
              <td> 0h 57m</td>
            </tr>
            <tr>
              <th scope="row">Avg Runs / Week</th>
              <td>4</td>
            </tr>
            <tr>
              <th scope="row" className="text-info">
                Estimated Best Efforts
              </th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">1 K</th>
              <td>4:17</td>
            </tr>
            <tr>
              <th scope="row">5 K</th>
              <td>25.16</td>
            </tr>
            <tr>
              <th scope="row">Time</th>
              <td>13h 36m</td>
            </tr>
            <tr>
              <th scope="row">Elev Gain</th>
              <td>{this.state.averageGain}</td>
            </tr>
            <tr>
              <th scope="row">Run</th>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row" className="text-info">
                All-Time
              </th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Distance</th>
              <td>205.1 km</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableStat;
