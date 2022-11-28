import React,{useContext} from 'react'
import bookOpen1 from "../../assets/images/book-open1.png"
import delete1 from "../../assets/images/delete1.png"
import { BookmarkContext } from '../../context/bookmarkContext'
import "./aside.scss"

function Aside() {
let {bookmark , setBookmark} = useContext(BookmarkContext)



let filterBookmark = (BookmarkId) =>{

    let filterBookmarkDelete = bookmark.filter( filterBookmarkId => filterBookmarkId.id !== BookmarkId )
    setBookmark([...filterBookmarkDelete]);
}

if (bookmark.length===0) {
    // window.localStorage.removeItem("bookmarkStorage")
}



return (
<div className="aside">
    <h2>Bookmarks</h2>
    <p>If you don’t like to read, you haven’t found the right book</p>

    <ul>

        {
        (bookmark.length > 0) ?
        bookmark.map(e =>{
         return <li key={e.id}>
            <div className='bookmark-text'>
                <p className='book-name'>{e.volumeInfo.title}</p>
                <p className='book-author'>{e.volumeInfo.authors}</p>
            </div>

            <div className='bookmark-images'>
                <a href={e.volumeInfo.infoLink} target={"_blank"}>
                <img src={bookOpen1} alt=""  />
                </a>
                <img src={delete1} alt="" onClick={() => filterBookmark(e.id)} className='delete' />
            </div>
        </li>
        }) :
        <h1>empty</h1>
        }


    </ul>

</div>

)
}

export default Aside