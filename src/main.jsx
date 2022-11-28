import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BookmarkProvider from './context/bookmarkContext'
import { InfoProvider } from './context/infoContext'
import ModalProvider from './context/modalContext'
import SortingProvider from './context/sortinContext'

ReactDOM.createRoot(document.getElementById('root')).render(
<BookmarkProvider>
    <SortingProvider>
        <ModalProvider>
            <InfoProvider>
                    <App />
            </InfoProvider>
        </ModalProvider>
    </SortingProvider>
</BookmarkProvider>
)