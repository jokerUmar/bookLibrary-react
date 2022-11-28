import React,{useContext} from 'react'
import "./InfoModal.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faL, faXmark} from "@fortawesome/free-solid-svg-icons"
import { ModalContext } from '../../context/modalContext'
import { InfoContext } from '../../context/infoContext'
import { useEffect } from 'react'

function InfoModal() {

let {modal , setModal} = useContext(ModalContext)

let {info} = useContext(InfoContext)


let modalXmarkValue = (e) =>{
setModal(false)
}

    useEffect(() => {
        document.addEventListener('keydown' , closeOverlay , true)
    }, [])
    


    let closeOverlay = (e) =>{
        if(e.key === "Escape"){
            setModal(false)
        }
    }




return ( <>

    {
    (info) ?
    <div className={(modal)? "overlay" : "overlay-none" }>

        <div className="container">
            <div className='modal'>
                <div className="modal-header">
                    {
                    info.volumeInfo ?
                    <h2>{info.volumeInfo.title}</h2>
                    : <h2>title</h2>
                    }
                    <FontAwesomeIcon onClick={modalXmarkValue} className='modal__xmark' icon={faXmark}>
                    </FontAwesomeIcon>
                </div>

                <div className="modal-body">
                    <img src={(info.volumeInfo) ? info.volumeInfo.imageLinks.thumbnail : "undefined" } width="230px"
                        height={"300px"} className='modal-book__img' alt="" />

                    {
                    (info.volumeInfo) ?
                    <p className='modal__text'>
                        { info.volumeInfo.description}
                    </p> : <p>undefined</p>
                    }


                    <div className="modal-author modal-data">
                        <span>Author : </span>
                        {
                        (info.volumeInfo) ?
                        <p>{ info.volumeInfo.authors}</p>
                        : <p>undefined</p>
                        }
                    </div>

                    <div className="modal-published modal-data">
                        <span>Published : </span>
                        {
                        (info.volumeInfo) ?
                        <p>{ info.volumeInfo.publishedDate}</p>
                        : <p>undefined</p>
                        }
                    </div>

                    <div className="modal-publishers modal-data">
                        <span>Publishers: </span>
                        {
                        (info.volumeInfo) ?
                        <p>{info.volumeInfo.publisher}</p>
                        : <p>undefined</p>
                        }
                    </div>

                    <div className="modal-categories modal-data">
                        <span>Categories: </span>
                        {
                        (info.volumeInfo) ?
                        <p> {info.volumeInfo.categories}</p>
                        : <p>undefined</p>
                        }
                    </div>

                    <div className="modal-count modal-data">
                        <span>Pages Count: </span>
                        {
                        (info.volumeInfo) ?
                        <p>{info.volumeInfo.pageCount}</p>
                        : <p>undefined</p>
                        }
                    </div>

                </div>

                <div className="modal-footer"> {
                    (info.volumeInfo) ?
                    <a href={info.volumeInfo.infoLink} target='_blank'>read</a>
                    : <p>undefined</p>
                    }

                </div>

            </div>

        </div>
    </div> : <h1>ishlamadi</h1>

    }


</>


)
}

export default InfoModal