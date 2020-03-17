import React from "react";
import ActivitiesSummary from "./ActivitiesSummary";
import { Spinner } from "reactstrap";
import { Alert } from "reactstrap";
const ActivitiesList = ({ activities }) => {
  if (!activities)
    return (
      <Alert color="danger" className="text-center">
        Loading...
      </Alert>
    );
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
