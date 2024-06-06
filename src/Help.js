import React from 'react'
import { Link } from 'react-router-dom'

export default function Help() {
  return (
    <div style={{color: "violet",background:"linear-gradient(140deg,#FFFFE0,darkgoldenrod)",height:"100vh"}}>
        <center><h1>Help</h1></center>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    </div>
  )
}
