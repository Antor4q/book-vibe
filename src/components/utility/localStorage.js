
const getStoredId = () => {
    const books = localStorage.getItem('book-id')
    if(books){
        return JSON.parse(books)
    }
    return []
}

const saveBooksId = id =>{
    const getId = getStoredId()
    const isExist = getId.find(itemId => itemId === id)
    if(!isExist){
        getId.push(id)
        localStorage.setItem('book-id', JSON.stringify(getId))
    }
    else{
        alert("Is Exist")
    }
}
 
export { getStoredId, saveBooksId}