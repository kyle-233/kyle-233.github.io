import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Suspense>
  </React.StrictMode>,
)
