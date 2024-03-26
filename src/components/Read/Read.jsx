import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredId } from "../utility/localStorage";



const Read = () => {

    const books = useLoaderData()
    const [storedBooks,setStoredBooks] = useState()
   
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
            <h2 className="text-4xl ">Read book are coming soon {storedBooks.length}</h2>
        </div>
    );
};

export default Read;