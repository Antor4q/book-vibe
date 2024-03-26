import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredId } from "../../components/utility/localStorage";
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";


const Read = () => {
    const books = useLoaderData()
    const [storedBooks,setStoredBooks] = useState([])
   
    useEffect(()=>{
        const savedBooksId = getStoredId()
       
       if(books.length > 0){
         const bookAdded = books.filter(book => savedBooksId.includes(book.bookId))
         setStoredBooks(bookAdded)
         
         }
     },[books])
     
 console.log(storedBooks)
    
    return (
        <div className="lg:mt-8">
            {
                storedBooks.map(book => {
                    return <>
                    
                        <div>
                            <div className="card lg:gap-6 card-side lg:p-6 border border-[#13131326] lg:mb-6">
                            <figure className="lg:p-7 lg:w-[230px]  p-5 bg-[#1313130D] rounded-2xl"><img src={book.image} alt="Movie"/></figure>
                            <div className="card-body p-0">
                                <h2 className="text-[#131313] text-2xl font-bold">{book.bookName}</h2>
                                <p className="text-[#0d0d0dcc] font-medium">By : {book.author}</p>
                                <div className="flex items-center gap-4">
                                    <span className="text-[#131313] font-bold">Tag</span>
                                   <div className="flex gap-3">
                                   {
                                        book.tags.map(tag =>{
                                            return <div  key={tag.length}>
                                                <p className='text-[#23BE0A] px-4 py-2 bg-[#23BE0A0D] font-medium rounded-[30px]'> {tag}</p>
                                            </div>
                                        })
                                    }
                                   </div>
                                   <p className="flex items-center gap-2 text-[#0d0d0dcc]"><CiLocationOn /> Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                                    <div className="flex gap-4 text-[#0d0d0d99] items-center">
                                        <span className="flex gap-2 items-center"><FaUserFriends /> Publisher: {book.publisher}</span>
                                        <span className="flex gap-2 items-center"><LuFileSpreadsheet /> Page: {book.totalPages}</span>
                                    </div>
                                    <hr className="lg:my-4 my-2" />
                                <div className="flex gap-3 items-center">
                                <span className="bg-[#328EFF26] text-[#328EFF] rounded-[30px] px-5 py-3">Category: {book.category}</span>
                                <span className="bg-[#FFAC3326] text-[#FFAC33] rounded-[30px] px-5 py-3">Rating: {book.rating}</span>
                                <button className="btn text-white rounded-[30px] font-medium text-[18px] bg-[#23BE0A] px-5">View Details</button>
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

export default Read;