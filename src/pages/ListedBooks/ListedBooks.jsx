
import { Link, Outlet } from "react-router-dom";

import { useState } from "react";


const ListedBooks = () => {
    const [btnIndex,setBtnIndex] = useState(0)
    return (
        <div className="lg:max-w-[1170px] mx-auto">
            <div className="bg-[#1313130D] rounded-2xl text-center lg:p-8">
            <h2 className="lg:text-[28px] font-bold text-center">Books</h2>
            </div>

            <div className="text-center lg:mt-8 lg:mb-10">
            <button className="btn bg-green-600 px-7 text-white font-bold text-2xl">Sort By</button>

            </div>

            <div className="">
            <div className="flex  items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap  text-gray-100">
                <Link to={""} onClick={()=> setBtnIndex(0)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${btnIndex === 0 ? "border border-b-0":"border-b"} rounded-t-lg border-gray-400 text-gray-50`}>
                   
                    <span className="text-[#0d0d0d80] text-[18px]">Read Books</span>
                </Link>
                <Link to={"wishlist"}  onClick={()=> setBtnIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${btnIndex === 1 ? "border border-b-0":"border-b"} rounded-t-lg border-gray-400 text-gray-50`}>
                  
                    <span className="text-[#0d0d0d80] text-[18px]">Wishlist Books</span>
                </Link>
                

            </div>
            <Outlet></Outlet>
            </div>
            
           
        </div>
    );
};

export default ListedBooks;