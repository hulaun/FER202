import './App.css';
import { Additional } from './components/Additional';
import Department from './components/Department';
import EditProject from './components/EditProject';
import Home from './components/Home';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Additional />} />
        <Route path="department/:id/employees" element={<Department />} />
        <Route path="projects/edit/:id/" element={<EditProject />} />
      </Routes>
    </Router>
  );
}

export default App;
