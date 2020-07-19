import React from "react";
import "./index.css";

function Selection(props) {
  const selection = Object.keys(props.data).map((key) => {
    return (
      <option key={key} value={key}>
        {key}
      </option>
    );
  });

  const change = (event) => {
    props.filter(props.filterType, event.target.value);
  };

  return (
    <div className="selectionDiv">
      <label htmlFor={props.filterType}>
        Choose {props.filterType} to sort:{"   "}
      </label>
      <select name={props.filterType} onChange={change}>
        <option value="none">Select</option>
        {selection}
      </select>
    </div>
  );
}

export default Selection;
