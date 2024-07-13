export const fetchProjects = async () => {
  const response = await fetch("http://localhost:5500/projects");
  const data = await response.json();
  return data;
}
export const fetchProject = async (id) => {
  const response = await fetch("http://localhost:5500/projects/"+id);
  const data = await response.json();
  return data;
}
export const fetchDepartments = async () => {
  const response = await fetch("http://localhost:5500/departments");
  const data = await response.json();
  return data;
}
export const fetchDepartment = async (id) => {
  const response = await fetch("http://localhost:5500/departments/"+id);
  const data = await response.json();
  return data;
}
export const fetchEmployees = async () => {
  const response = await fetch("http://localhost:5500/employees");
  const data = await response.json();
  return data;
}
export const updateProject = async (id, project) => {
  const response = await fetch("http://localhost:5500/projects/"+id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  });
  const data = await response.json();
  return data;
}