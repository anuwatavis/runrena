import React from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";
const options = [
  { value: "7FKB6O9B5ec0Cx7gPw6glBLJxdp2", label: "Anu" },
  { value: "nwuuK1tXPYTaCpL1h6IkNilHIM32", label: "Peter" },
  { value: "XtyfnWfWTzLtfH0AH8QRQY0tKH33", label: "Anuwat" },
  { value: "jcB2aVB87SNUUj3BVB99ETo25Zm2", label: "Toby" },
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
