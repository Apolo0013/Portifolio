import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
//Provider do contextglobal
import ProviderContext from '../store/ProviderContext.tsx'

createRoot(document.getElementById('root')!).render(
    <ProviderContext> 
        <StrictMode>
            <App />
        </StrictMode>
    </ProviderContext>
        ,
)
