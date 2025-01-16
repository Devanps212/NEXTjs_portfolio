import React from 'react'
import './globals/globals.css'
import 'font-awesome/css/font-awesome.min.css';
import Nav from './components/navbar/navbar';
import { ToastContainer } from 'react-toastify'

const layout : React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <html>
        <head>
          <title>Portfolio</title>
        </head>
        <body>
        <Nav/>
          <ToastContainer
            autoClose={4000}
            closeButton={true}
            position='top-center'
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            />
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout
