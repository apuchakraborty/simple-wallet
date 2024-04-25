import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ScopedCssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "#fff"
    },
    primary : {
    main: '#1a56db',
    yellow: "#fff748",
    description: '#817d7d'
  }
  },
   
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>

    <ThemeProvider theme={theme}>
    <ScopedCssBaseline enableColorScheme>

    <App />
    </ScopedCssBaseline>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
