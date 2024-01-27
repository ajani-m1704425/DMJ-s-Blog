import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { SlNote, SlBell } from "react-icons/sl";
import profile from "../resources/images/profile1.jfif"

const Navbar = () => {
    return ( 
        <nav className="px-5 py-0.5 flex sm:py-2 sm:px-10 items-center border border-[#f2f2f2]">
            <h1 className="text-[#f1356d] pr-6 text-lg font-semibold">DMJ's Blog</h1>
            <div className="ml-auto sm:ml-0 flex items-center sm:bg-[#f9f9f9] rounded-3xl">
                <div className="px-1.5 text-2xl sm:px-3  ">
                    {/* <FaMagnifyingGlass /> */}
                    <CiSearch />
                </div>
                <form action="" >
                    <input className="hidden sm:block bg-[#f9f9f9] py-1.5 rounded-r-3xl focus:outline-0" type="text" placeholder="Search"/>
                </form>
            </div>
            
            <div className="sm:ml-auto flex items-center">
                <Link to="/create" className="hidden md:block no-underline hover:text-[#f1356d] ">
                    <div className="flex items-center">
                        <div className="pr-1 font-thin text-xl ">
                            <SlNote />
                        </div>
                        <p className="">Post</p>
                    </div>
                </Link>
                <Link to="/" className="mx-5 sm:mx-8 no-underline hover:text-[#f1356d] ">
                    <div className="text-xl flex items-center">
                        <SlBell />
                    </div>
                </Link>
                <div>
                    <img src={profile} alt="" className="w-[42px] border-rounded"/>
                </div>
            </div>
            
            
        </nav>

        
     );
}
 
export default Navbar;