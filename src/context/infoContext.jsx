import {createContext , useState } from "react";

export let InfoContext = createContext()

export let  InfoProvider = ({children}) =>{

    const [info, setInfo] = useState({});

    let infoData = {
        info , setInfo
    }


    return(
        <InfoContext.Provider value={infoData}>
            {children}
        </InfoContext.Provider>
    )


}