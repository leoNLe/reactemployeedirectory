import React from "react";
import Employee from "../components/employee/";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  sort = (event) => {
    console.log(event.target.name);
    this.props.sorting(event.target.name);
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
              <button
                onClick={this.sort}
                style={{
                  outline: "none",
                  border: "none",
                  backgroundColor: "Transparent",
                }}
                name="name"
              >
                Name
              </button>
            </th>
            <th>
              <button name="role" onClick={this.sort}>
                Role
              </button>
            </th>
            <th>
              <button name="department" onClick={this.sort}>
                Department
              </button>
            </th>
            <th>
              <button name="workNumber">Work Number</button>
            </th>
          </tr>
        </thead>
        <tbody>{employees}</tbody>
      </table>
    );
  }
}

export default Main;
