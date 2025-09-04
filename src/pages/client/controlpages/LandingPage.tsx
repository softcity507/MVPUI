 import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Welcome from '../Welcome';
import NotFound from '../NotFound';
import Payments from '../Payments';
import Verify from '../Verify';
  

function  LandingPage() {
  return (
       

     
         
        <Routes>
          {/* //before login */}
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/verify" element={<Verify />} />

          <Route path="/payments" element={<Payments />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
       
  );
}

export default  LandingPage;
