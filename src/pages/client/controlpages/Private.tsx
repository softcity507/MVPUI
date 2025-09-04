import { Navigate, Outlet } from 'react-router-dom'
 
 
const Private = () => {
    
   const isAuthenticated= true;
     return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;

}

export default Private
