import React from "react";
import ActivitiesSummary from "./ActivitiesSummary";
const ActivitiesList = ({ activities }) => {
  return (
    <div className="activities-list-section">
      {activities &&
        activities.map(activity => {
          return <ActivitiesSummary activity={activity} key={activity.id + Math.random()} />;
        })}
    </div>
  );
};

export default ActivitiesList;
