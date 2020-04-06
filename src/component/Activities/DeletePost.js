import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deletePostAction } from "../store/actions/activityAction";
import { connect } from "react-redux";
const DeletePost = (props) => {
  const { deletePost, activity } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const handelDeletePost = () => {
    deletePost(activity);
    setModal(!modal);
  };
  return (
    <div>
      <Button size="sm" color="danger" onClick={toggle} className="ml-4 rounded-circle">
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Post</ModalHeader>
        <ModalBody>Do you want to delete this post ?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handelDeletePost}>
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { deletePost: (activity) => dispatch(deletePostAction(activity)) };
};
export default connect(null, mapDispatchToProps)(DeletePost);
