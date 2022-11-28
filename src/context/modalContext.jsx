import { createContext ,useState } from "react";

export const ModalContext = createContext()


let ModalProvider = ({children}) => {

const [modal, setModal] = useState(false);

const dataModal = {
modal,setModal
}

return (
<ModalContext.Provider value={dataModal}>
  {children}
</ModalContext.Provider>
)
}

export default ModalProvider