import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Create from './Pages/Create';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogDetails from './Pages/BlogDetails';
import NoPage from './Pages/NoPage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
        <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/*" element={<NoPage />} />
         </Routes>
    </Router>
    
  );
}

export default App;
