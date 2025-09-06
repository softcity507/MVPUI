 import { Routes, Route } from 'react-router-dom';
import Domain from '../Domain';
import Template from '../Template';
import Profile from '../Profile';
import History from '../History';
import Contact from '../Contact';
import Sidebar from '../../../components/navbar/Sidebar';
import Brand from '../Brand';
import NotFound from '../NotFound';
import Addbrand from '../Addbrand';
import { Scratch } from '../Scratch';
 

function  Dashboard() {
  return (
     
        <div className=' lg:flex min-h-[100vh] h-auto bg-blue-50'>
             <Sidebar/>            

             
         <div className='  lg:w-[85%] w-full  '>
        <Routes>
          <Route path="template" element={<Template />} />
          <Route path="addbrand" element={<Addbrand />} />
          <Route path="scratch" element={<Scratch />} />
          
          <Route path="domain" element={<Domain />} />
          <Route path="brand" element={<Brand />} />
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          
         </Routes>
         </div>
          </div>
      
  );
}

export default  Dashboard;
