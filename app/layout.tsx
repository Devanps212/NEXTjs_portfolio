import React from 'react'
import './globals/globals.css'
import 'font-awesome/css/font-awesome.min.css';
import Nav from './components/navbar/navbar';

const layout : React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <html>
        <head>
          <title>Portfolio</title>
        </head>
        <body >
        <Nav/>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout
