import React, { useState } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

const Message = ({ msg }) => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    // <div className="alert alert-info alert-dismissible fade show" role="alert">
    //   {msg}
    //   <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    //     <span aria-hidden="true">&times;</span>
    //   </button>

    // </div>
    <Alert color="info" isOpen={visible} toggle={onDismiss}>
      {msg}
    </Alert>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
