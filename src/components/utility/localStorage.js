

const getStoredBooks = (readOrWish) => {
    const getBooks = localStorage.getItem(readOrWish);
    if(getBooks){
        return JSON.parse(getBooks)
    }
    return []
}

const saveBooks = (id,readOrWish) =>{
    const booksId = getStoredBooks(readOrWish);
    const storedId = booksId.find(itemId => itemId === id)
    if(!storedId){
        booksId.push(id)
        localStorage.setItem(readOrWish, JSON.stringify(booksId))
    }
    else{
        alert("This book already exist")
    }
}

export { getStoredBooks, saveBooks}