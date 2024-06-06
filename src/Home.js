import React from 'react'
import { Link } from "react-router-dom"
import "./App.css"
export default function Home() {
  return (
        <div style={{color: "red",background:"linear-gradient(140deg,rgb(253, 78, 113),yellow)",height:"100vh"}}>
        <center><h1>Home</h1></center>
        <nav>
            <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ol>
        </nav></div>
        
  )
}
