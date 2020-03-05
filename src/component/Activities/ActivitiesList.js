import React from "react";
import ActivitiesSummary from "./ActivitiesSummary";

const ActivitiesList = () => {
  return (
    <div className="activities-list-section">
      <ActivitiesSummary />
      <ActivitiesSummary />
      <ActivitiesSummary />
    </div>
  );
};

export default ActivitiesList;
