import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div style={{color: "orange",backgroundColor:"pink",height:"100vh"}}>
        <center><h1>Contact</h1></center>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    </div>
  )
}
