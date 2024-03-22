import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Create from './Pages/Create';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import BlogDetails from './Pages/BlogDetails';
import NoPage from './Pages/NoPage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UseAuthContext from './components/Context/useAuthContext';

function App() {
  const { user } = UseAuthContext();

  return (
    <div>
      <ToastContainer />
      <Router>
        {user && <Navbar />}
         <Routes>
            <Route path="/" element={ user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/create" element={ user ? <Create /> : <Navigate to="/login" />} />
            <Route path="/login" element={ !user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={ !user ? <Signup /> : <Navigate to="/" />} />
            <Route path="/blogs/:id" element={ user ? <BlogDetails /> : <Navigate to="/login" />} />
            <Route path="/*" element={<NoPage />} />
         </Routes>
      </Router>
    </div>
    
  );
}

export default App;
