import React from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { queryUserData } from "../store/actions/queryUserData";
const options = [
  { value: "7FKB6O9B5ec0Cx7gPw6glBLJxdp2", label: "Anu" },
  { value: "nwuuK1tXPYTaCpL1h6IkNilHIM32", label: "Peter" },
  { value: "XtyfnWfWTzLtfH0AH8QRQY0tKH33", label: "Anuwat" },
  { value: "jcB2aVB87SNUUj3BVB99ETo25Zm2", label: "Toby" },
];

class SearchBox extends React.Component {
  state = {
    selectedOption: null,
    userData: this.props.userData,
    openMenu: false,
  };
  componentDidMount = () => {
    this.props.queryUserData("sss");
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.setState({ openMenu: false });
    console.log(`Option selected:`, selectedOption);
    window.location = "/runner/" + selectedOption.value;
  };
  handleInputChange = (query, { action }, selectedOption) => {
    if (action === "input-change") {
      this.setState({ openMenu: true });
    }
  };
  hideMenu = () => {
    this.setState({ openMenu: false });
  };
  render() {
    const { selectedOption } = this.state;
    const { userData } = this.props;
    const userDataOption = [];
    userData.forEach((user) => {
      //console.log("SearchBox -> render -> user", user);
      let optionValue = { value: user["userId"], label: user["firstName"] };
      userDataOption.push(optionValue);
    });

    console.log("SearchBox -> render -> userData", userDataOption);

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        options={userDataOption}
        onBlur={this.hideMenu}
        menuIsOpen={this.state.openMenu}
        className="searchBox mr-4"
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.queryUsersDataReducer.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    queryUserData: (data) => dispatch(queryUserData(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
