import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch("/data.json")
        .then(res=>res.json())
        .then(item => setBooks(item))
    },[])

    return (
        <div className="lg:my-[100px]">
            <h2 className="text-[40px] text-[#131313] font-bold lg:mb-9 text-center font-[playfair]">Books</h2>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 p-5 lg:p-0 lg:gap-6 lg:max-w-[1170px] mx-auto">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;