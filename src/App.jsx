import React,{ useState , useEffect, useContext } from 'react'
import axios from 'axios';
import Header from './components/header/header'
import Aside from './components/aside/aside';
import Header2 from './components/header2/header2';
import Main from './components/main/main';
import './App.css'
import InfoModal from './components/infoModal/InfoModal';
import { SortingContext } from './context/sortinContext';

function App() {

let {orderBy } = useContext(SortingContext)

const [data, setData] = useState({});
const [search, setSearch] = useState("js");
const [page, setPage] = useState(1);
const [maxResults, setMaxResults] = useState(10);
const [items, setItems] = useState([]);

useEffect(() => {
let getBook = async function () {
axios
.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${page}&maxResults=${maxResults}&orderBy=${orderBy}`)
.then(result => {
setData(result.data)
setItems(result.data.items)
})
.catch(error => console.log(error))
}
getBook()
}, [search , orderBy , page])



return (
<div className="App">
  <Header setSearch={setSearch} />
  <Header2 />
  <div className="container" style={{display:"flex" , alignItems:"flex-start"}}>
    <Aside />
    <InfoModal />
      <Main data={data} items={items} page={page} setPage={setPage} search={search} >
      </Main>
  </div>
</div>
)
}

export default App