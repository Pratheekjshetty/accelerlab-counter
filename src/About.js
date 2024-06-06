import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div style={{color: "blue",backgroundColor:"lightgreen",height:"100vh"}}>
        <center><h1>About</h1></center>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    </div>
  )
}
