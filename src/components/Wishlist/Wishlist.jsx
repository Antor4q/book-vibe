import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";


const Wishlist = () => {

    const books = useLoaderData()
    const [wishBooks,setWishBooks] = useState([])
    
    useEffect(()=>{
        const savedWishId = JSON.parse(localStorage.getItem("wish-book")) || []
       
     
        if(books.length > 0){
            const savedWishBook = books.filter(book => savedWishId.includes(book.bookId))
           
            
            setWishBooks(savedWishBook)
        }
    },[books])

    return (
        <div className="lg:mt-8">
           
           {
                wishBooks.map(book => {
                  
                    return <>
                        
                    <div className="mt-7 lg:mt-0">
                        <div className="card lg:gap-6 flex-col lg:flex-row p-4  card-side lg:p-6 border border-[#13131326] lg:mb-6">
                        <figure className="lg:p-7 lg:w-[230px] w-full  p-5 bg-[#1313130D] rounded-2xl"><img src={book.image} alt="Movie"/></figure>
                        <div className="card-body mt-3 lg:mt-0  p-0">
                            <h2 className="text-[#131313] text-2xl font-bold">{book.bookName}</h2>
                            <p className="text-[#0d0d0dcc] font-medium">By : {book.author}</p>
                            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                               <div className="flex items-center gap-2">
                               <span className="text-[#131313] font-bold">Tag</span>
                               <div className="flex gap-3">
                               {
                                    book.tags.map(tag =>{
                                        return <div  key={tag.length}>
                                            <p className='text-[#23BE0A]   lg:px-4 p-2 lg:py-2 bg-[#23BE0A0D] font-medium rounded-2xl lg:rounded-[30px]'> {tag}</p>
                                        </div>
                                    })
                                }
                               </div>
                               </div>
                               <p className="flex items-center gap-2 text-[#0d0d0dcc]"><CiLocationOn className="text-lg" /> Year of Publishing: {book.yearOfPublishing}</p>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-4 text-[#0d0d0d99] lg:items-center">
                                    <span className="flex gap-2 items-center"><FaUserFriends /> Publisher: {book.publisher}</span>
                                    <span className="flex gap-2 items-center"><LuFileSpreadsheet /> Page: {book.totalPages}</span>
                                </div>
                                <hr className="lg:my-4 my-2" />
                            <div className="flex gap-3 flex-col lg:flex-row items-center">
                            <div>
                                <span className="bg-[#328EFF26] text-[#328EFF] rounded-2xl lg:rounded-[30px] px-3 py-2 lg:px-5 lg:py-3">Category: {book.category}</span>
                            <span className="bg-[#FFAC3326] text-[#FFAC33] ml-4 lg:ml-0 rounded-[30px] lg:px-5 px-3 lg:py-3 py-2">Rating: {book.rating}</span>
                            </div>
                            <Link to={`/bookDetails/${book.bookId}`} className="btn text-white mt-2 lg:mt-0 rounded-[30px] font-medium text-[18px] bg-[#23BE0A] px-5">View Details</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                
                </>
                  
                })
            }
        </div>
    );
};

export default Wishlist;