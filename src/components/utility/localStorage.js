import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getStoredBooks = (readOrWish) => {
    const getBooks = localStorage.getItem(readOrWish);
    if(getBooks){
        return JSON.parse(getBooks)
    }
    return []
}

const saveBooks = (id,readOrWish,errorMessage) =>{
    const booksId = getStoredBooks(readOrWish);
    const storedId = booksId.find(itemId => itemId === id)
    if(!storedId){
        booksId.push(id)
        localStorage.setItem(readOrWish, JSON.stringify(booksId))
        if(errorMessage === true){

       
            toast.success("Book Added to Read List")
              }else{
                toast.success("Book Added to Wish List")
              }
    }
    else{
        if(errorMessage === true){

       
      toast.error("You have Already Read this Book")
        }else{
            toast.error("You have Already added to Wish List this Book")
        }
    }
}

export { getStoredBooks, saveBooks}