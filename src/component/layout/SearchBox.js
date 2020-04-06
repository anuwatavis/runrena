import React from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";
const options = [
  { value: "L6JvGzT3xURwRWnvmJI25lAF12R2", label: "Harry" },
  { value: "LlyLjlqRiiSr2AOYgVS07AN1Mz23", label: "Peter" },
  { value: "zMqahfX66UMQi4Gd6JScQVRxfNu2", label: "Anuwat" },
  { value: "9PhDdozZddg8fbqdCkRlun9BY9N2", label: "Bon" },
  { value: "KdO0ZHja1ZgitIOCVDwCAdQpmlB3", label: "Ron" },
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
