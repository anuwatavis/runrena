import React from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";
const options = [
  { value: "ohvyIh1XewT7U9C9bQgKgxVN7aI3", label: "Harry" },
  { value: "m9ksLJjFi2SshtZIXqq8OFMSLEo2", label: "Peter" },
  { value: "XtyfnWfWTzLtfH0AH8QRQY0tKH33", label: "Anuwat" },
];

class SearchBox extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    window.location = "/runner/" + selectedOption.value;
  };
  render() {
    const { selectedOption } = this.state;

    return <Select value={selectedOption} onChange={this.handleChange} options={options} className="searchBox mr-4" />;
  }
}

export default SearchBox;
