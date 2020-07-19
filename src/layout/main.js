import React from "react";
import Employee from "../components/employee/";
import "./index.css";
class Main extends React.Component {
  sort = (event) => {
    console.log(event.target.innerText);
    this.props.sorting(event.target.innerText.toLowerCase());
  };
  render() {
    const employees = this.props.employees.map((employee) => {
      return <Employee key={employee.id} employee={employee} />;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>
              <button name="name" onClick={this.sort} className="sortButton">
                <span>Name</span>
              </button>
            </th>
            <th>
              <button name="role" onClick={this.sort} className="sortButton">
                <span> Role </span>
              </button>
            </th>
            <th>
              <button
                name="department"
                onClick={this.sort}
                className="sortButton"
              >
                <span> Department </span>
              </button>
            </th>
            <th>
              <button className="sortButton">
                <span> Work Number </span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{employees}</tbody>
      </table>
    );
  }
}

export default Main;
