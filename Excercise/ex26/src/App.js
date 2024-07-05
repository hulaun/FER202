import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoApi from './components/DemoAPI';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DemoApi />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
