import React from "react";
import "./App.css";
import Main from "./layout/main";
import fileEmployees from "./employee.json";
import Navigation from "./components/navigation/";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: fileEmployees,
      roles: {},
      departments: {},
      sortedEmployees: fileEmployees,
      name: "none",
      role: "none",
      department: "none",
    };
  }

  componentDidMount = () => {
    //Fill the roles in state
    const tempRoles = {};
    this.state.employees.forEach((employee) => {
      if (!tempRoles.hasOwnProperty(employee.role)) {
        const role = employee.role;
        tempRoles[role] = true;
      }
    });
    this.setState({ roles: tempRoles });
  };

  sorting = (column) => {
    let sorted, status;
    if (this.state[column] === "none") {
      sorted = sortAscending(this.state.sortedEmployees);
      status = "ascending";
    } else if (this.state[column] === "descending") {
      sorted = sortAscending(this.state.sortedEmployees).reverse();
      status = "descending";
    } else {
      sorted = this.state.fileEmployees;
      status = "none";
    }

    this.setState({ sortedEmployees: sorted, [column]: status });
  };

  filter = (top, lower) => {
    if (lower === "none") {
      this.setState({ sortedEmployees: this.state.employees });
    } else {
      const sorted = this.state.employees.filter(
        (employee) => employee[top] === lower
      );
      this.setState({ sortedEmployees: sorted });
    }
  };

  render() {
    return (
      <div className="App">
        <Navigation roles={this.state.roles} filter={this.filter} />
        <Main employees={this.state.sortedEmployees} sorting={this.sorting} />
      </div>
    );
  }
}

const sortAscending = (employees) => {
  const sorted = employees;

  return sorted;
};

export default App;
