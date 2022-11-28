import React from 'react'
import "./header.scss"
import headerLogo from "../../assets/images/logo.png"
import searchIcon from "../../assets/images/search-icon.png"

function Header({setSearch}) {

    let searchValue = (e) =>{
        
        if (e.code === "Enter") {
            setSearch(e.target.value)
        }

    }

    return (
        <header>
            <div className="container">
            <div className="logo">
                <img src={headerLogo} alt="" />
            </div>
            <div className="header-input">
                <img src={searchIcon} alt="" />
                <input type="text" onKeyUp={searchValue} placeholder='Search books' />
            </div>
            <div className="header-btn">
                <button className='darkmode'>darkmode</button>
                <button className='logout'>logOut</button>
            </div>
            </div>
        </header>
    )
}

export default Header
