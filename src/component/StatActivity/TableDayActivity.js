import React, { Component } from "react";
import { Table } from "reactstrap";
class TableDayActivity extends Component {
  state = {
    activities: this.props.activityUserByDate,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ activities: nextProps.activityUserByDate });
  }
  render() {
    const { activities } = this.state;
    return (
      <div>
        {activities &&
          activities.map((activity) => {
            return (
              <h6>
                {activity.titleActivity} {activity.totalDistance} {activities.totalTime}
              </h6>
            );
          })}

        {/* <Table striped className="table-date-stat table-striped">
          <thead className="table-date-stat">
            <tr className="text-center">
              <th>Title</th>
              <th>Distance</th>
              <th>Pace</th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr>
              <td>Morning Run</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Phatthalung Running</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table> */}
      </div>
    );
  }
}

export default TableDayActivity;
