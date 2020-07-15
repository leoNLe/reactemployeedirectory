import React, { useState } from "react";

function Navigation(props) {
  //const [value] = useState();
  const roleSelection = Object.keys(props.roles).map((key) => {
    return (
      <option key={key} value={key}>
        {key}
      </option>
    );
  });
  const change = (event) => {
    props.filter("role", event.target.value);
  };
  return (
    <div>
      <div>
        <label htmlFor="filter">Choose Role to Sort: </label>
        <select name="filter" onChange={change}>
          <option value="none">Select</option>
          {roleSelection}
        </select>
      </div>
    </div>
  );
}
export default Navigation;
