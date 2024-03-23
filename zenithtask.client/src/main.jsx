import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.jsx";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    </React.StrictMode>,
)
