 import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
 
import LandingPage from './client/controlpages/LandingPage';
import Dashboard from './client/controlpages/Dashboard';
import NotFound from './client/NotFound';
import Private from './client/controlpages/Private';

function Pages() {
  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden">
      <ToastContainer
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
        theme="colored" 
      />

     
       <main className="flex-grow ">
        
        <Routes>
          {/* //before login */}
          <Route path="/*" element={<LandingPage />} />
          <Route path="/*" element={<Private />}>
          <Route path="confirmed/*" element={<Dashboard />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </main>

       
    </div>
  );
}

export default Pages;
