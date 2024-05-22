import { useState } from "react";

function Company() {
  const [companies,setCompanies] = useState([
    {id: 0, name: "Company One", category: "Finance", start: 1981, end: 2004 },
    {id: 1, name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    {id: 2, name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    {id: 3, name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    {id: 4, name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    {id: 5, name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    {id: 6, name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    {id: 7, name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    {id: 8, name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ]);

  const createCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
  };

  const updateCompany = (index) => {
    console.log(index);
    const updateCompanies = companies.map((company)=>{
      if(company.id===index){
        return{...company, name: "Company Ten"};
      }
      return company
    })
    console.log(updateCompanies);
    setCompanies([...updateCompanies]);
  };

  const deleteCompany = (index) => {
    setCompanies(companies.filter((_, i) => i !== index));
  };

  return ( 
  <div className="row">
    {companies.map((company, index) => (
      <div key={index} className="col-sm-3">
        <div className="card" style={{ width: "18rem", margin: "1rem" }}>
          <div className="card-body">
            <h5 className="card-title">{company.name}</h5>
            <p className="card-text">
              <strong>Category:</strong> {company.category}
              <br />
              <strong>Start:</strong> {company.start}
              <br />
              <strong>End:</strong> {company.end}
            </p>
          </div>
          <button 
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={()=>{deleteCompany(index)}}>
            delete
          </button>
          <button 
            type="button"
            className="btn btn-primary btn-sm"
            onClick={()=>{updateCompany(index)}}>
            update
          </button>
        </div>
      </div>
    ))}
    <button 
      type="button"
      className="btn btn-primary btn-sm"
      onClick={()=>{createCompany({ name: "Company Nine", category: "Retail", start: 1981, end: 1989 })}}>
      Create company
    </button>
    
</div> );
}

export default Company;