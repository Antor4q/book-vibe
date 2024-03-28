
// import { Link, Outlet, useLoaderData } from "react-router-dom";

import {  createContext, useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredWishBooks } from "../../components/utility/wishLocal";
// import { getStoredBooks } from "../../components/utility/localStorage";







export const AssetContext = createContext("gold")

export const WishContext = createContext("wish")

const ListedBooks = () => {

    const books = useLoaderData()
    const [storedBooks,setStoredBooks] = useState([])
    const [storedWishBooks,setStoredWishBooks] = useState([])
   
    useEffect(()=>{
        const savedBooksId = JSON.parse(localStorage.getItem("read-book")) || []
        const savedWishBooksId = getStoredWishBooks()
        
       if(books.length > 0){
         const bookAdded = books.filter(book => savedBooksId.includes(book.bookId))
         const bookWishAdded = books.filter(book => savedWishBooksId.includes(book.bookId))
         setStoredBooks(bookAdded)
         setStoredWishBooks(bookWishAdded)
         }
     },[books])

     console.log(storedBooks)

    

    const handleSort = filter =>{
        if(filter === "rating"){
            console.log("This is rating clicked")
        }
        else if(filter === "pages"){
            console.log("This is all pages")
        }
       else if(filter === "year"){
        console.log("This is published year")
       }
    }
   


    const [btnIndex,setBtnIndex] = useState(0)
    return (
        <div className="lg:max-w-[1170px] mx-auto p-4 lg:p-0">
            <div className="bg-[#1313130D] rounded-2xl text-center p-6 lg:p-8">
            <h2 className="lg:text-[28px] text-2xl font-bold text-center">Books</h2>
            </div>

            <div className="text-center mt-4 mb-5 lg:mt-8 lg:mb-10">
                <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 lg:px-5 bg-[#23BE0A] text-white">Sort By <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
		</svg></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={()=> handleSort("rating")} className="bg-[#23BE0A] text-white rounded-xl"><a>Rating</a></li>
                <li onClick={()=> handleSort("pages")} className="bg-[#23BE0A] text-white rounded-xl"><a>Number of Pages</a></li>
                <li onClick={()=> handleSort("year")} className="bg-[#23BE0A] text-white rounded-xl"><a>Published Year</a></li>
            </ul>
            </div>

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
          
            <AssetContext.Provider value={storedBooks}>
             <WishContext.Provider value={storedWishBooks}>
             <div>
               <Outlet></Outlet>
               </div>
             </WishContext.Provider>
            </AssetContext.Provider>
            </div>
            
           
        </div>
    );
};

export default ListedBooks;