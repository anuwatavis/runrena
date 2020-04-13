import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { queryActivitySummary } from "../store/actions/queryActivitySummary";
class TableStat extends Component {
  state = {
    userId: this.props.userId,
    averageStat: null,
  };

  componentDidMount() {
    this.props.queryActivitySummary(this.props.userId);
  }
  render() {
    const { activities } = this.props;
    let averageStat;
    let dataFunRun = [];
    let dataInThisMonth = [];
    const average = (activities) => {
      let distanceSum = 0;
      let timeSum = 0;
      let averageStat = {};
      let thisMonth = new Date();
      let min = 0;
      let second = 0;
      thisMonth = thisMonth.getMonth();
      activities.forEach((activity) => {
        let timeStamp = activity["createdAt"].seconds;
        let date = new Date(timeStamp * 1000);
        if (date.getMonth() === thisMonth) {
          dataInThisMonth.push(activity);
        }
        if (activity["totalDistance"] >= 5 && activity["totalDistance"] <= 5.5) {
          dataFunRun.push(activity);
        }
      });
      averageStat["runningCount"] = activities.length;
      activities.forEach((activity) => {
        distanceSum = distanceSum + activity.totalDistance;
        timeSum = timeSum + activity.totalTime;
        let time = activity.totalTime.toString();
        let array = time.split(".", -1);
        min = min + parseInt(array[0]);
        second = second + parseInt(array[1]);
      });
      console.log("TableStat -> average -> min", min);
      console.log("TableStat -> average -> second", second);
      min = min + Math.floor(second / 60);
      second = second % 60;
      console.log("TableStat -> average -> second", second);

      let totalTime = min.toString() + "." + second.toString();
      averageStat["Time"] = totalTime;
      averageStat["totalDistance"] = distanceSum;
      return averageStat;
    };
    if (activities) {
      averageStat = average(activities);
    }
    if (dataFunRun.length > 0) {
      console.log("TableStat -> render -> dataFunRun", dataFunRun);
      let min = dataFunRun[0].totalTime;
      for (let i = 1, len = dataFunRun.length; i < len; i++) {
        let v = dataFunRun[i].totalTime;
        min = v < min ? v : min;
      }
      averageStat["bestFunRun"] = min;
      console.log("TableStat -> render -> min", min);
    }
    if (dataInThisMonth.length > 0) {
      let timeSum = 0;
      let distanceSum = 0;
      let elevGainSum = 0;
      let monthCount = dataInThisMonth.length;
      dataInThisMonth.forEach((activity) => {
        distanceSum = distanceSum + activity.totalDistance;
        timeSum = timeSum + activity.totalTime;
        elevGainSum = elevGainSum + activity.averageElevation;
      });
      averageStat["Elevation"] = elevGainSum / 4;
      averageStat["avgDistance"] = distanceSum / 4;
      averageStat["avgTime"] = timeSum / 4;
      averageStat["runPerMonth"] = monthCount;
    }

    console.log("TableStat -> render -> averageStat", averageStat);
    // const thisMonthAverage = (dataInthisMonth) => {
    //   let timeSum = 0;
    //   let distanceSum = 0;
    //   dataInthisMonth.forEach((activity) => {
    //     distanceSum = distanceSum + activity.totalDistance;
    //     timeSum = timeSum + activity.totalTime;
    //   });
    //   averageStat["avgDistance"] = distanceSum / 7;
    //   averageStat["avgTime"] = timeSum / 7;
    //   return averageStat;
    // };
    // const bestFunRun = (dataFunRun) => {
    //   if (dataFunRun.length > 0) {
    //     let min = dataFunRun[0].totalTime;
    //     for (let i = 1, len = dataFunRun.length; i < len; i++) {
    //       let v = dataFunRun[i].y;
    //       min = v < min ? v : min;
    //     }
    //     return [min];
    //   }
    // };
    // if (dataFunRun) {
    //   bestFunRun(dataFunRun);
    // }
    // if (activities) {
    //   averageStat = average(activities);
    //   averageStat = thisMonthAverage(activities);
    // }

    return (
      <div>
        <Table size="sm">
          <tbody>
            <tr>
              <th scope="row" className="text-info">
                This Month Summary
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
              <th scope="row">Total Runs</th>
              {averageStat ? <td>{averageStat.runPerMonth} runs</td> : <td>loading</td>}
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
              <th scope="row">Fun Run (5K)</th>
              {averageStat ? <td>{averageStat.bestFunRun} Mins</td> : <td>loading</td>}
            </tr>
            <tr>
              <th scope="row">Time</th>
              {averageStat ? <td>{averageStat.Time} mins</td> : <td>loading</td>}
            </tr>
            <tr>
              <th scope="row" className="text-info">
                All-Time
              </th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Run</th>
              {averageStat ? <td>{averageStat.runningCount}</td> : <td>loading</td>}
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

const mapStateToProps = (state) => {
  return {
    activities: state.querySummaryReducer.summaryActivity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    queryActivitySummary: (userId) => dispatch(queryActivitySummary(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableStat);
