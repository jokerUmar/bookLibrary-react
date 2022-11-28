import { createContext ,useState } from "react";

export const SortingContext = createContext()


let SortingProvider = ({children}) => {

const [orderBy, setOrderBy] = useState("relevance");

const dataSort = {
orderBy,setOrderBy
}

return (
<SortingContext.Provider value={dataSort}>
  {children}
</SortingContext.Provider>
)
}

export default SortingProvider