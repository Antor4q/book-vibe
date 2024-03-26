
const getStoredId = () => {
    const books = localStorage.getItem('book-id')
    if(books){
        return JSON.parse(books)
    }
    return []
}

const saveBooksId = idInt =>{
    const getId = getStoredId()
    const isExist = getId.find(itemId => itemId === idInt)
    if(!isExist){
        getId.push(idInt)
        localStorage.setItem('book-id', JSON.stringify(getId))
    }
    else{
        alert("Is Exist")
    }
}
 
export { getStoredId, saveBooksId}