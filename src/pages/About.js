import React from 'react'
import "./About.css";
import classes from "./About.module.css"
//import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div style={{color: "blue",background:"linear-gradient(140deg,lightgreen,lightblue)",height:"100vh"}}>
        <center><h1 className='text-xl font-bold'>About</h1></center>
        {/* css style */}
        <p className='about_css'>External css</p>
        <p className={classes.module_css}>Module css</p>
        <p className={`${classes.module_css} m-4 p-4 bg-slate-600 inline-block border-2`}>Both css</p>
    </div>
  )
}
