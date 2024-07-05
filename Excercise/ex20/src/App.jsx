import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes,Route, Link  } from 'react-router-dom';

export const routes = [
  {
    path: "/",
    component: () => <h1>Home Page</h1>,
    exact: true,
  },
  {
    path: "/products",
    component: () => <h1>Products Page</h1>,
  },
  {
    path: "/about",
    component: () => <h1>About Page</h1>,
  },
  {
    path: "/contact",
    component: () => <h1>Contact Page</h1>,
  },
  {
    path: "/users/:userId?",
    component: ({ params }) => <h1>User Profile: {params.userId}</h1>,
  },
];
function App() {
  

  return (
    <div className="App">
      <Router>
        <ul>
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}> {route.path}</Link>
            </li>
          ))}
        </ul>
        <Routes>
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component/>}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
