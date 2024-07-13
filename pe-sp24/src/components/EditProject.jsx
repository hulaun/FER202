import React, { useEffect, useState } from "react";
import {fetchDepartments, fetchProject, updateProject } from "../api/Home";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditProject() {
  const navigator = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataProject = await fetchProject(id);
      const dataDepartments = await fetchDepartments();
      setProject(dataProject);
      setDepartments(dataDepartments);
    };

    fetchData();
  },[])

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProject({...project, [id]: value});
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    Object.keys(project).forEach(key => {
      if(key!='department' && project[key].trim()==='' ){
        isValid = false;
      }
    });
    if(isValid){
      await updateProject(id, {...project, department: parseInt(project.department)})
      alert("Update success");
      navigator("/");
    }else{
      alert("Please fill the fields");
    }
  }

  return (
  <div className="px-5"> 
    <div className="px-5"> 
      <h1 className="text-center">Edit Project</h1>
      <div>
        <Link to="/">Home Page</Link>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Project name</label>
            <input type="text" className="form-control" id="name" value={project.name} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea type="text" className="form-control" style={{height:"7rem"}} id="description" value={project.description} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="start_date" className="form-label">Start date</label>
            <input type="date" className="form-control" id="startDate" value={project.startDate} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">Type</label>
            <input type="text" className="form-control" id="type" value={project.type} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">Department</label>
            <select className="form-select" id="department" value={project.department} onChange={handleChange}>
              {departments.map((department) => {
                return (
                  <option key={department.id} value={department.id} selected={project.department==department.id}>{department.name}</option>
                )
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  </div> );
}

export default EditProject;