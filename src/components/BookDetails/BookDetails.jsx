import {  useLoaderData, useParams } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveBooks } from "../utility/localStorage";
import { saveWishBooks } from "../utility/wishLocal";






const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
     const singleBook = books.find(book => book.bookId === idInt)
   
     const handleRead = () => {
      saveBooks(idInt)
    
        
    }
   const handleWish = () => {
       saveWishBooks(idInt)
     }
    
    return (
        <div className="lg:max-w-[1170px] mx-auto p-4 lg:p-0 lg:mt-[52px]">
           <div className="card grid lg:grid-cols-2 grid-cols-1  lg:gap-12 lg:card-side ">
            <figure className="p-[70px]  bg-[#1313130D] rounded-2xl"><img src={singleBook.image} /></figure>
            <div className=" p-0">
                <h2 className="text-[#131313] text-[40px] font-bold font-[playfair]">{singleBook.bookName}</h2>
                <p className="text-[#131313CC]  text-[20px] font-medium">By: {singleBook.author}</p>
                <hr className="lg:mt-6 lg:mb-4" />
                <p className="text-[#131313CC] text-[20px] font-medium">{singleBook.category}</p>
                <hr className="lg:mt-4 lg:mb-6" />
                <p className="text-[#131313B3] leading-[26px]"><span className="text-[#131313] font-bold">Review :</span> {singleBook.review}</p>

                <div className='flex gap-4 items-center lg:mt-6'>
                    <p className="text-[#131313] font-bold">Tag</p>
                <div className="flex gap-3">
                {
                    singleBook.tags.map(tag =>{
                        return <div  key={tag.length}>
                            <p className='text-[#23BE0A] px-4 py-2 bg-[#23BE0A0D] font-medium rounded-[30px]'> {tag}</p>
                        </div>
                    })
                }
                </div>
                </div>
                <hr className="lg:my-6" />
                <div className="flex flex-col gap-3">
                    <table className="table">
                       <tbody>
                       <tr>
                            <td className="lg:w-[150px]">Name of Pages :</td>
                            <th>{singleBook.totalPages}</th>
                         </tr>
                        <tr>
                            <td className="lg:w-[150px]">Publisher :</td>
                            <th>{singleBook.publisher}</th>
                         </tr>
                        <tr>
                            <td className="lg:w-[150px]">Year of Publishing :</td>
                            <th>{singleBook.yearOfPublishing}</th>
                         </tr>
                        <tr>
                            <td className="lg:w-[150px]">Rating :</td>
                            <th>{singleBook.rating}</th>
                         </tr>
                       </tbody>
                    </table>
                </div>
                <div className="card-actions">
                <button  onClick={handleRead} className="btn bg-white text-[#131313] font-semibold text-[18px] border border-[#13131326]">Read</button>
                <ToastContainer></ToastContainer>
                <button onClick={handleWish}  className="btn text-[18px] bg-[#50B1C9] text-white font-semibold lg:px-7">Wishlist</button>
                <ToastContainer></ToastContainer>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookDetails;