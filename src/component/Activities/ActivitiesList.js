import React from "react";
import ActivitiesSummary from "./ActivitiesSummary";
import { Alert } from "reactstrap";
const ActivitiesList = ({ activities, users }) => {
  if (!activities)
    return (
      <Alert color="danger" className="text-center">
        Loading...
      </Alert>
    );
  return (
    <div className="activities-list-section">
      {activities &&
        activities.map((activity) => {
          return <ActivitiesSummary activity={activity} key={activity.id + Math.random()} users={users} />;
        })}
    </div>
  );
};

export default ActivitiesList;
