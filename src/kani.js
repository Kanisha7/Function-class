import React,{useState}from 'react'

function Kani() {
  const[counts1,setcounts1]=useState(0);
    function myfunc()
    {
        setcounts1(counts1+1)
    }
    function myfunc1()
    {
        setcounts1(counts1-1)
    }
    const[counts2,setcounts2]=useState(0);
    function myfunc2()
    {
        setcounts2(counts2+1)
    }

  return (
    <>
    <button onClick={myfunc}>Increase</button>
    <span>{counts1}</span><br></br>
    <button onClick={myfunc1}>Decerease</button><br></br>
    <button onMouseOver={myfunc2}><span>{counts2}</span></button><br></br>
    </>
  )
}

export default Kani