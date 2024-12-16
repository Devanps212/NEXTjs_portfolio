import React from 'react'
import './globals/#globals.css'
import 'font-awesome/css/font-awesome.min.css';
import Nav from './components/navbar/navbar';
import Slider from './components/slider/slider';


const layout : React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <html>
        <head>

        </head>
        <body>
        <Nav/>
            <main>
                {children}
            </main>
            <Slider/>
        </body>
    </html>
  )
}

export default layout
