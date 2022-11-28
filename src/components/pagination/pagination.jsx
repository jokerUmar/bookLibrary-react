import React,{useState} from 'react'
import "./pagination.scss"
import { Pagination } from '@mantine/core';

function Demo({setPages , data}) {
    
  const [activePage, setPage] = useState(1);
  return <Pagination onClick={(e) => setPages(e.target.innerText)} page={activePage} onChange={setPage} total={Math.ceil(data.totalItems/10)} />;
}

export default Demo

//innerText