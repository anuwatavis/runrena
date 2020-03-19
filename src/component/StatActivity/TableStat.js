import React, { Component } from "react";
import { Table } from "reactstrap";
export default class TableStat extends Component {
  render() {
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
              <td>10.8 km</td>
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
              <td>1157 m</td>
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
