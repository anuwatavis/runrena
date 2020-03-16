import React, { useState } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

const Message = ({ msg }) => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <Alert color="info" isOpen={visible} toggle={onDismiss}>
      {msg}
    </Alert>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
