import './App.css'
import 'react-toastify/dist/ReactToastify.css';
 
import Pages from './pages/Pages';
import { useEffect } from 'react';

function App() {
 
 useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  console.log(token)
  if (token) {
    fetch(`http://localhost:5000/api/auth/verify?token=${token}`)
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch(() => alert("Verification failed!"));
  }
}, []);

  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden">
      <Pages/>
       
    </div>
  );
}

export default App;
