import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
export default function Layout(props) {
  return (
    <div >
        <nav className="bg-slate-200 sm:bg-slate-300 lg:bg-slate-400 p-4">
            <ol className='flex justify-start gap-4 text-lg'>
                <li><Link  to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ol>
        </nav>
        <div>{props.children}</div></div>
  )
}
