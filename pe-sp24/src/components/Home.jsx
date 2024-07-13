import React, { useEffect, useState } from "react";
import { fetchDepartments, fetchProjects } from "../api/Home";
import { Link } from "react-router-dom";

function Home() {

  const [projects, setProjects] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      const dataProjects = await fetchProjects();
      const dataDepartments = await fetchDepartments();
      setProjects(dataProjects);
      setDepartments(dataDepartments);
    };

    fetchData();
  },[])

  const handleSelectDepartment = (event) => {
    setSelectedDepartment(event.target.value);
  }
  console.log(selectedDepartment)

  return (<div>
    <h1 className="text-center pb-4">List of Projects</h1>
    <div className="d-flex gap-5 px-5">
      <div>
        <h2>Departments</h2>
        <input onChange={handleSelectDepartment} type="radio" id="all" name="department" value="0"/>
        <label htmlFor="all">All</label><br/>
        {departments && departments.map((department) => {
          return (
            <div key={department.id}>
              <input  onChange={handleSelectDepartment} type="radio" id={department.id} name="department" value={department.id}></input>
              <label htmlFor={department.id}>{department.name}</label><br/>
            </div>
          )
        })}
      </div>
      <table className="table table-striped table-border">
        <thead>
          <tr>
              <th>Id</th>
              <th>Project name</th>
              <th>Description</th>
              <th>Start date</th>
              <th>Type</th>
              <th>Department</th>
              <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {projects && departments && projects.map((project) => {
              return (selectedDepartment==="0" || project.department===parseInt(selectedDepartment)) &&(
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>{project.startDate}</td>
                  <td>{project.type}</td>
                  <td>
                    <Link to={`/department/${project.department}/employees`}>
                      {departments.find(department => department.id===project.department).name}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/projects/edit/${project.id}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  </div> );
}

export default Home;