import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import { extendTheme } from '@chakra-ui/react'
import {BrowserRouter as Router}  from "react-router-dom";

import App from './App.tsx'
import AuthProvider  from './components/AuthProvider.tsx'

const proTheme = extendTheme(theme)
const extenstion = {
  colors: { ...proTheme.colors, brand: proTheme.colors.teal },
}
const myTheme = extendTheme(extenstion, proTheme)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>    
    </ChakraProvider>  
  </React.StrictMode>,
)
