import React from "react";
import ActivitiesSummary from "./ActivitiesSummary";
import { Link } from "react-router-dom";
const ActivitiesList = ({ activities }) => {
  return (
    <div className="activities-list-section">
      {activities &&
        activities.map(activity => {
          return <ActivitiesSummary activity={activity} key={activity.id} />;
        })}
    </div>
  );
};

export default ActivitiesList;
