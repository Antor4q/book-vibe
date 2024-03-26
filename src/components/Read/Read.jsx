import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredId } from "../../components/utility/localStorage";



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
                            <div>

                            </div>
                            <div>
                                
                            </div>
                        </div>
                    
                    </>
                })
            }
        </div>
    );
};

export default Read;