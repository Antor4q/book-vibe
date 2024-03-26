
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const getStoredId = () => {
    const books = localStorage.getItem("read-book")
    
    if(books){
        return JSON.parse(books)
    }
    return []
}

const saveBooksId = (idInt) =>{
    const getId = getStoredId()
    const isExist = getId.find(itemId => itemId === idInt)
    if(!isExist){
        getId.push(idInt)
        localStorage.setItem("read-book", JSON.stringify(getId))
        toast.success("Books Added to Read List")
    }
    else{
       toast.error("You have Already Read this Book")
    }
}
 
export { getStoredId, saveBooksId}