import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getStoredWishBooks = () => {
    const getBooks = localStorage.getItem("wish-book");
    if(getBooks){
        return JSON.parse(getBooks)
    }
    return []
}

const saveWishBooks = (id) =>{
    const booksWishId = getStoredWishBooks();
    const storedWishId = booksWishId.find(itemId => itemId === id)
    if(!storedWishId){
        booksWishId.push(id)
        localStorage.setItem("wish-book", JSON.stringify(booksWishId))
       toast.success("Book Added to Wish List")
           
    }
    else{
       

       
      toast.error("You have Already added to Wish List this Book")
      
    }
}

export { getStoredWishBooks, saveWishBooks}