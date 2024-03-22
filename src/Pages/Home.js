import UseAuthContext from "../components/Context/useAuthContext";
import BlogList from '../components/BlogList';
import CategoryNav from '../components/CategoryNav';
import { toast } from "react-toastify";
import { useEffect } from "react";

const Home = () => {
    const {twiLogin, dispatch } = UseAuthContext();
    console.log(twiLogin)

    if (twiLogin === "fail") {
        toast.error("Error Login in !", {
            position: 'top-right',
        });
        dispatch({ type: "TWINULL" })
    } else if (twiLogin === "success") {
        toast.success("Login Success", {
            position: 'top-right',
        });
        dispatch({ type: "TWINULL" })
    }

    
    

    return ( 
        <div className="w-full px-5 pt-5 sm:w-[95%] md:w-[85%] lg:w-[63%] lg:px-10 mx-auto lg:pt-10 lg:border-x border-[#f2f2f2]">
            <CategoryNav />
            <BlogList />
            
        </div>
     );
}
 
export default Home;