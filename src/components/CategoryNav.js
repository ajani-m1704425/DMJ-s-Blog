import { LiaPlusSolid } from "react-icons/lia";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useState } from "react";


const categories = ["All", "Web2", "Web3", "Cryptocurrency", "Airdrop", "Gaming",
    "Entertainment", "Art", "Food", "Tecnology", "Artificial Intelligence",
    "Deep Learning", "Data Science", "Machine Learning"]

const CategoryNav = () => {
    const [sroll, setScroll] = useState(0)
    const [navs, setnavs] = useState(0);
    const catnav = document.querySelector(".catnav");

    const handleScrollRight = () => {
        const catnav = document.querySelector(".catnav");
        catnav.scrollLeft += 150;
        setScroll(catnav.scrollLeft)
        console.log(catnav.scrollLeft)
       
    }
    const handleScrollLeft = () => {
        catnav.scrollLeft -= 150;
        setScroll(catnav.scrollLeft)
    }


    return (
        <div className='flex items-center pb-0 border-b border-[#f2f2f2]'>
            {sroll ===0 &&<div className="px-3 text-xl md:px-5 pb-3 cursor-pointer">
                <LiaPlusSolid />
            </div>}
            <div>
                {/* <FaAngleLeft /> */}
                {sroll !==0 && <div className="px-3 md:px-5 pb-3 cursor-pointer text-sm" onClick={handleScrollLeft}>
                    <SlArrowLeft />
                </div>}
            </div>
            <div className="catnav flex flex-nowrap overflow-auto w-max justify-between items-center scroll-smooth no-scrollbar">
                {categories.map((category, index) => (
                    <div key={index} className="px-3 md:px-5 ">
                        <p className={`w-max cursor-pointer text-sm pb-3 ${navs===index && 'border-b border-[#000] font-medium text-[#000]'}`} onClick={()=>{setnavs(index)}}>{category}</p>    
                    </div>
                    
                ))}

                
            </div>        
            <div>
                {/* <FaAngleRight /> */}
                {sroll <=800 &&<div className="px-3 md:px-5 pb-3 cursor-pointer text-sm" onClick={handleScrollRight}>
                    <SlArrowRight />
                </div>}
            </div>
        </div>
    );
}

export default CategoryNav;