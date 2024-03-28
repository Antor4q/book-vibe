import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getStoredBooks = () => {
    const getBooks = localStorage.getItem("read-book");
    if(getBooks){
        return JSON.parse(getBooks)
    }
    return []
}

const saveBooks = (id) =>{
    const booksId = getStoredBooks();
    const storedId = booksId.find(itemId => itemId === id)
    if(!storedId){
        booksId.push(id)
        localStorage.setItem("read-book", JSON.stringify(booksId))
       toast.success("Book Added to Read List")
    }
    else{
       toast.error("You have Already Read this Book")
     }
}

export { getStoredBooks, saveBooks}