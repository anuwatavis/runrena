import React from "react";
import PropTypes from "prop-types";
import { Progress } from "reactstrap";

const Progressbar = ({ percentage }) => {
  return (
    // <div className="progress">
    //   <div
    //     className="progress-bar progress-bar-striped bg-success"
    //     role="progressbar"
    //     style={{ width: `${percentage}%` }}
    //   >
    //     {percentage}%
    //   </div>
    // </div>
    <Progress value={percentage} />
  );
};

Progressbar.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Progressbar;
