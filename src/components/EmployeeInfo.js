import React from "react";
import EmployeeList from "../data/employees.json";


function EmployeeInfo(props) {
  console.log(props)

  const results = EmployeeList.filter(employee => employee.firstName.toLowerCase().includes(props.search.toLowerCase()) || employee.lastName.toLowerCase().includes(props.search.toLowerCase()) || employee.position.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div>
      <h2 className="text-center table-title">Employees</h2>
      {results.length > 0 ? (
        <table id="dtBasicExample" className="table table-bordered table-sm" cellSpacing="0" width="100%">
        <thead className="thead-dark">
          <tr>
            <th scope="col" onClick={ () => props.sortBy('firstName') }>First</th>
            <th scope="col" onClick={ () => props.sortBy('lastName') }>Last</th>
            <th scope="col" onClick={ () => props.sortBy('position') }>Position</th>
            <th scope="col" onClick={ () => props.sortBy('salary') }>Salary</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr key={result.id}>
              <td>{result.firstName}</td>
              <td>{result.lastName}</td>
              <td>{result.position}</td>
              <td>${result.salary.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
        ) : (
          <h2>No Results</h2>
        )}
    </div>
  )
}

export default EmployeeInfo;
