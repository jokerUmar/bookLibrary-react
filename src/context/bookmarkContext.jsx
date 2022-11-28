import { createContext , useState } from "react";

export const BookmarkContext = createContext()

const BookmarkProvider = ({children}) =>{

    const [bookmark, setBookmark] = useState([]);
    

    const bookmarkData = {
        bookmark : bookmark , 
        setBookmark : setBookmark , 
    }



    return(
        <BookmarkContext.Provider value = {bookmarkData}>
            {children}
        </BookmarkContext.Provider>
    )

}

export default BookmarkProvider