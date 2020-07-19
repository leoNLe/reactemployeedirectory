import React from "react";
import Selection from "../selections";
import "./index.css";

function Navigation(props) {
  return (
    <div className="navigation-container">
      <Selection filterType="role" filter={props.filter} data={props.roles} />
      <Selection
        filterType="department"
        filter={props.filter}
        data={props.departments}
      />
    </div>
  );
}
export default Navigation;
