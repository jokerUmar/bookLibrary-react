import React,{useContext} from 'react'
import { SortingContext } from '../../context/sortinContext'
import "./header2.scss"
function Header2() {

  let {setOrderBy} = useContext(SortingContext)


  const sorting = () =>{
    setOrderBy("newest")
  }
  
  // newest

  return (
    <div className='header2'>
        <div className="container">
                <p>Showing 18 Result(s)</p>
                <button onClick={sorting}>Order by newest</button>
        </div>
    </div>
  )
}

export default Header2