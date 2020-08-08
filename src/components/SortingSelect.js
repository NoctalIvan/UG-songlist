import React, { Component } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const labelToValue = (label) => {
  switch (label) {
    case "artist_up":
      return { field: "artist", direction: 1 };
    case "artist_down":
      return { field: "artist", direction: -1 };
    case "title_up":
      return { field: "title", direction: 1 };
    case "title_down":
      return { field: "title", direction: -1 };
    default:
      console.warn('unknown sorting label : ' + label)
      return { field: "title", direction: 1 };
  }
};

const valueToLabel = (value) => {
  if (value.field === "artist") {
    return "artist_" + (value.direction === 1 ? "up" : "down");
  }

  return "title_" + (value.direction === 1 ? "up" : "down");
};

class SortingSelect extends Component {
  render() {
    const propsValue = valueToLabel(this.props.value)

    return (
        <div>
            <FormControl variant="outlined">
                <Select
                    value={propsValue}
                    onChange={(event) => this.props.onChange(labelToValue(event.target.value))}
                    IconComponent={undefined}>
                    <MenuItem value={"title_up"}>Title ▲</MenuItem>
                    <MenuItem value={"title_down"}>Title ▼</MenuItem>
                    <MenuItem value={"artist_up"}>Artist ▲</MenuItem>
                    <MenuItem value={"artist_down"}>Artist ▼</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
  }
}

export default SortingSelect;
