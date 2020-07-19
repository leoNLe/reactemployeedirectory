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
    const tempRoles = getSelection("role", this.state.employees);
    const tempDepartments = getSelection("department", this.state.employees);
    this.setState({ departments: tempDepartments, roles: tempRoles });
  };

  sorting = (column) => {
    let sorted, status;

    if (this.state[column] === "none") {
      sorted = sortAscending(this.state.sortedEmployees, column);
      status = "ascending";
    } else if (this.state[column] === "ascending") {
      sorted = sortAscending(this.state.sortedEmployees, column).reverse();
      status = "descending";
    } else {
      sorted = sortAscending(this.state.sortedEmployees, "id");
      status = "none";
    }

    this.setState({ sortedEmployees: sorted, [column]: status });
  };

  filter = (column, value) => {
    if (value === "none") {
      this.setState({ sortedEmployees: this.state.employees });
    } else {
      const sorted = this.state.employees.filter(
        (employee) => employee[column] === value
      );
      this.setState({ sortedEmployees: sorted });
    }
  };

  render() {
    return (
      <div className="App">
        <Navigation
          roles={this.state.roles}
          departments={this.state.departments}
          filter={this.filter}
        />
        <Main employees={this.state.sortedEmployees} sorting={this.sorting} />
      </div>
    );
  }
}

const sortAscending = (employees, column) => {
  return employees.sort((a, b) => {
    const tempA = a[column].toLowerCase();
    const tempB = b[column].toLowerCase();
    if (tempA < tempB) {
      return -1;
    }
    if (tempA > tempB) {
      return 1;
    }
    return 0;
  });
};

const getSelection = (column, employees) => {
  const temp = {};

  employees.forEach((employee) => {
    if (!temp.hasOwnProperty(employee[column])) {
      const value = employee[column];
      temp[value] = true;
    }
  });

  return temp;
};

export default App;
