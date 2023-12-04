import {
    Routes,
    Route,
  } from "react-router-dom";

import { AUTH, REGISTER, DASHBOARD } from "./routes";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";





const AppRoutes = () => {
  return (
    
    
    <Routes>
                  
                  <Route path={AUTH}>
                      <Route index element={<Login />} />
                      <Route path={REGISTER} element={<Signup />} />
                      <Route path={DASHBOARD} element={<Dashboard />} />
                  </Route>
                 
    
    </Routes>
           
  )
}

export default AppRoutes