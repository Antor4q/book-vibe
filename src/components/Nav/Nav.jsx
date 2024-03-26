import { NavLink } from "react-router-dom";





const Nav = () => {
    return (
        <div className=" lg:max-w-[1170px] mx-auto   lg:my-12">

            <div className="navbar p-0 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to={"/"} 
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A] px-4 py-2": "lg:text-[18px] text-[#131313CC]"}>Home</NavLink></li>
                    <li>
                    <NavLink to={"/listedBooks"} 
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A] px-4 py-2": "lg:text-[18px] text-[#131313CC]"}>Listed Books</NavLink></li>

                    <li><NavLink to={"/pagesRead"} 
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A] px-4 py-2": "lg:text-[18px] text-[#131313CC]"}>Pages to Read</NavLink></li>
                   
                    <li><NavLink 
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A] px-4 py-2": "lg:text-[18px] text-[#131313CC]"}>About</NavLink></li>
                   
                    <li><NavLink  
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A] px-4 py-2": "lg:text-[18px] text-[#131313CC]"}>Contact</NavLink></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl lg:text-[28px] text-[#131313] p-0 font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex lg:gap-3 ">
                    <li><NavLink to={"/"} 
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A] ": "lg:text-[18px] text-[#131313CC]"}>Home</NavLink></li>

                    <li><NavLink to={"/listedBooks"} 
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A]  ": "lg:text-[18px] text-[#131313CC]"}>Listed Books</NavLink></li>
                   <li> <NavLink to={"/pagesRead"} 
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A]  ": "lg:text-[18px] text-[#131313CC]"}>Pages to Read</NavLink></li>

                    <li><NavLink  
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A] px-4 py-2": "lg:text-[18px] text-[#131313CC]"}>About</NavLink></li>
                   
                    <li><NavLink 
                    className={({isActive})=> isActive? "rounded-lg lg:text-[18px] text-[#23BE0A] border border-[#23BE0A] px-4 py-2": "lg:text-[18px] text-[#131313CC]"}>Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end pr-5 lg:pr-0  gap-2 lg:gap-3">
                <a className="bg-[#23BE0A] btn lg:text-[18px] text-white rounded-lg font-semibold   px-4 lg:px-[28px]">Sign In</a>
                <a className="btn bg-[#59C6D2] lg:text-[18px] text-white rounded-lg font-semibold  px-4 lg:px-[28px]">Sign Up</a>
            </div>
            </div>

        </div>
    );
};

export default Nav;