import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";  
import Login from '../Pages/Login/Login';
import List from '../Pages/List';
import Dashboard from '../Pages/Dashboard';
import Form from '../Pages/Form';
function RoutesComponent() {
  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list" element={<List />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
    );
}
export default RoutesComponent;
