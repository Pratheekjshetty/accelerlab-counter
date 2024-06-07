import React, { useEffect, useState } from 'react'
import "./Home.css"
//import { Link } from 'react-router-dom'
//example for useState and useEffect
export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return (
      <div style={{color: "red", background: "linear-gradient(140deg, rgb(253, 78, 113), yellow)", height: "100vh"}}>
      <center><h1 className='text-xl font-bold'>Home</h1><br/>
      <p className='p1'>Count: {count}</p></center>
  </div> 
  )
}
