import { useState } from "react";

function Students() {
  const [students, setStudents] = useState([
    {
      id:'DE160182',
      name: 'Nguyễn Hữu Quốc Khánh',
      image: 'khanh.png',
      address: 'DaNang',
      featured: false,     
    },
    {
      id:'DE160377',
      name: 'Choy Vĩnh Thiện',
      image: 'thien.png',
      address: 'QuangNam',
      featured: false
     
    },
    {
      id: 'DE160547',
      name: 'Đỗ Nguyên Phúc',
      image: 'phuc.png',
      address: 'QuangNam',
        featured: false
      
    },
    {
      id: 'DE170049',
      name: 'Lê Hoàng Minh',
      image: 'minh.png',     
      address: 'DaNang',
      featured: true,
      
    }
  ])
  
  const createStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const updateStudent = (index) => {
    const updateStudent = students.map((Students)=>{
      if(Students.id===index){
        return{...Students, name: "Student update"};
      }
      return Students
    })
    console.log(updateStudent);
    setStudents([...updateStudent]);
  };

  const deleteStudents = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return ( <div>
    <div className="row">
      {students.map((student, index) => (
        <div key={student.id} className="col-sm-4">
          <div className="card" style={{ width: "18rem", margin: "1rem" }}>
            <div className="card-body">
              <h5 className="card-title">{student.name}</h5>
              <p className="card-text">
                <strong>feature:</strong> {student.featured}
                <br />
                <strong>address:</strong> {student.address}
              </p>
            </div>
            <img
              src={student.image}>
            </img>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={()=>{deleteStudents(index)}}>
              delete
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={()=>{updateStudent(student.id)}}>
              update
            </button>
          </div>
        </div>
      ))}
    </div>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={()=>{createStudent({
          id: 'DE160547',
          name: 'Đỗ Nguyên Phúc',
          image: 'phuc.png',
          address: 'QuangNam',
            featured: false
    
        })}}>
        Create student
      </button>
  </div> );
}

export default Students;