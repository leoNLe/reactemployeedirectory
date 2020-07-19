import React from "react";

function Employee(props) {
  return (
    <tr className="row">
      <td>{props.employee.name} </td>
      <td>{props.employee.role} </td>
      <td>{props.employee.department} </td>
      <td>{props.employee.workNumber} </td>
    </tr>
  );
}

export default Employee;
