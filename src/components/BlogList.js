import profile from "../resources/images/profile3.jpeg";
import { FcLikePlaceholder, FcLike, FcBookmark } from "react-icons/fc";
import { PiBookmarkSimpleThin, PiDot, PiDotsThreeBold } from "react-icons/pi";
import crypto from  "../resources/images/crypto2.jfif"



const BlogList = ({blogs, title}) => {
  const currentDateTime = new Date();

      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const months = [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

      const formattedTime = currentDateTime.toLocaleTimeString();
      const day = days[currentDateTime.getDay()];
      const month = months[currentDateTime.getMonth()];
      const year = currentDateTime.getFullYear();
      const date = currentDateTime.getDate();
  const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus ratione soluta enim ipsa perspiciatis culpa sit hic porro facilis aspernatur illo, inventore architecto atque temporibus quis quasi voluptatem ad."
  
  const handleBookmark = () => {
    const pbook = document.querySelector(".pbook");
    const nbook = document.querySelector(".nbook");
    if (nbook.style.display === "none") {      
      pbook.style.display = "none";
      nbook.style.display = "block";
    } else {      
      pbook.style.display = "block";
      nbook.style.display = "none";
    }
  }
  
  const handleLike = () => {
    const plike = document.querySelector(".plike");
    const nlike = document.querySelector(".nlike");
    if (nlike.style.display === "none") {
      plike.style.display = "none";
      nlike.style.display = "block";
    } else {      
      
      plike.style.display = "block";
      nlike.style.display = "none";
    }
      }
    
  
    return (
      <div className="pt-8 pb-5 lg:pt-16 lg:pb-8 border-b border-[#f2f2f2]">
        <div className="flex items-center">
          <div className="w-full sm:w-[65%] md:w-[69%] lg:w-[73%]">
            <div className="flex items-center">        
              <img src={profile} alt="User Profile"  className="mr-1 w-[30px] h-[30px] rounded-full"/>
              <h2 className="pl-1.5 text-sm md:text:base  sm:px-2 sm:pr-1 font-medium ">User_Name</h2>
              <div className="text-base">
                <PiDot />
              </div>
              <p className=" sm:px-2 sm:pl-1 text-sm">{month} {date}, { year }</p>
            </div>
            <div className="flex py-3 sm:py-0 sm:block ">
              <div className="w-[80%] sm:w-full">
                <h1 className="sm:w-[98%] sm:py-3.5 text-[20px] sm:text-[22px] font-black text-[#000]">{'Blog Post Title Header'.slice(0, 100)}</h1>
                <p className="hidden md:block w-[98%] font-medium text-base text-[#000] leading-6 tracking-tight">
                    {description.slice(0, description.length-70)}<span className="text-xl tracking-wide">...</span>
                </p>
              </div>
              <div className="w-[100px] h-[90px] ml-auto sm:hidden">
                <img src={crypto} alt="Post imag"  className="w-full h-full"/>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:w-[30%] h-fit md:w-[28%] lg:w-[24%] ml-auto">
            <img src={crypto} alt="Post imag"  className="rounded-xl w-full sm:h-[130px] md:h-[180px] lg:h-[140px]"/>
          </div>
        </div> 
          <div className="pt-2 sm:w-[73%] items-center flex sm:pt-10">
            <div className="flex">
              <p className="text-xs font-semibold bg-[#d3e3fd] px-2.5 py-1 rounded-xl">Categories</p>
              <p></p>
            </div>
            <div className="flex ml-auto">
              <div onClick={handleBookmark} className=" block nbook text-[22px] px-2 cursor-pointer hover:text-[24px] transition-all duration-200">
                <PiBookmarkSimpleThin />
              </div>
              <div onClick={handleBookmark} className=" text-[22px] px-2 cursor-pointer hidden pbook hover:text-[24px] transition-all duration-200">
                <FcBookmark />
              </div>
              <div onClick={handleLike} className="block nlike text-[22px] px-2 cursor-pointer hover:text-[24px] transition-all duration-200">
                <FcLikePlaceholder />
              </div>
              <div onClick={handleLike} className="hidden plike text-[22px] px-2 cursor-pointer hover:text-[24px] transition-all duration-200">
                <FcLike />
              </div>
              <div className="text-[22px] px-2 cursor-pointer hover:text-[24px] transition-all duration-200">
                <PiDotsThreeBold />
              </div>
            </div>
          </div>
               
      </div>   
    );
}
 
export default BlogList;