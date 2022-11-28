import React,{useState , useContext} from 'react'
import { BookmarkContext } from '../../context/bookmarkContext'
import { InfoContext } from '../../context/infoContext'
import { ModalContext } from '../../context/modalContext'
import Demo from "../pagination/pagination"
import "./main.scss"


function Main({data  , items , setPage  ,children}) {
let {bookmark , setBookmark} = useContext(BookmarkContext)
let {modal , setModal} = useContext(ModalContext)
let {setInfo} = useContext(InfoContext)

let infoModalValue = () =>{
    setModal(!modal)
}


let handleValue = (bookmarkId) =>{
    
    let findBookmark = items.find( findId => findId.id == bookmarkId )
    
    if (!bookmark.includes(findBookmark)) {
        setBookmark([...bookmark , findBookmark])
    }
}


let infoValue = (InfoId) =>{
    
    let findInfo = items.find( findId => findId.id == InfoId )
    
    setInfo(findInfo)
    
}


return (
    <div className='hero'>
    {children}
    <ul>

        {
            items.map(e => {
                return <li key={e.volumeInfo.authors + e.volumeInfo.title } className='card'>
            <div className="card-img_box">
                <img src={e.volumeInfo.imageLinks.smallThumbnail} width={"180px"} height={"200px"} alt="" />
            </div>

            <div className="card-content_box">
                <h3 className='card-book_name'>{e.volumeInfo.title}</h3>
                <p className='card-book_author'>{e.volumeInfo.authors}</p>
                <p className='card-book_date'>{e.volumeInfo.publishedDate}</p>
            </div>
            <br />
            <div className="card-btn_box">
                <article style={{display:"block"}}>
                    <button className='bookmark-btn' onClick={()=>handleValue(e.id)}>Bookmark</button>
                    <button className='info-btn' onClick={()=>{
                        infoModalValue()
                        infoValue(e.id)
                        }}>More Info</button>
                </article>
                <a href={e.volumeInfo.infoLink} target="_blank" className='read-btn'>Read</a>
            </div>
        </li>
        })
        }
    </ul>
    <div className="pagination">
        <Demo setPages={setPage} data={data} />
    </div>
</div>
)
}

export default Main