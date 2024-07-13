import React, { useEffect, useState } from "react";
import {fetchDepartment, fetchEmployees } from "../api/Home";
import { Link, useParams } from "react-router-dom";

function Department() {
  const { id } = useParams();
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const dataEmployees = await fetchEmployees();
      const dataDepartment = await fetchDepartment(id);
      setEmployees(dataEmployees.filter(employee => employee.department == id));
      setDepartment(dataDepartment.name);
    };

    fetchData();
  },[])

  return (
  <div className="d-flex align-content-center justify-content-center">
    <div>
      <h1 className="text-center">List of Employees</h1>
      <div>
        <Link to="/">Home Page</Link>
        <h4>Department: {department}</h4>
        <table className="table table-striped table-border">
          <thead>
            <tr>
                <th>Id</th>
                <th>Employee name</th>
                <th>Date of birth</th>
                <th>Gender</th>
                <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.dob}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.position}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div> );
}

export default Department;