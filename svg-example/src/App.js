import React,{useState,useEffect} from 'react'
import './App.css'

const App=()=>{
    const [page,setPage]=useState({width:window.innerWidth,height:window.innerHeight})
    const resizerEvent=()=>{
        console.log({width:window.innerWidth,height:window.innerHeight})
        setPage({width:window.innerWidth,height:window.innerHeight})
    }
    useEffect(()=>{
    window.addEventListener('resize',resizerEvent)
    return window.removeEventListener('resize',resizerEvent)
    },[])
        return(
            <svg style={{background:'red'}} viewBox={`0 0 ${page.width} ${page.height}`}>
                {/* <path stroke="white" fill="none" strokeWidth="3" d={`M10,10 L${page.width-10},${page.height-10} L10,${page.height-10} A0,0 0 0,0 10,10`} /> */}
            </svg>
        )
}

export default App