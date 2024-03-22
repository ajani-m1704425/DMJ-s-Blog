import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NoPage = () => {
    return ( 
       <div className="not-found">
          {/* <Navbar /> */}
             <h1>Error 404</h1>
             <div>
                <Link to="/">Back to Homepage</Link>
             </div>

        </div>
       
        
        
     );
}
 
export default NoPage;