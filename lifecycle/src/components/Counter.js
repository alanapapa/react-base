import React from 'react'
import {useState, useEffect} from 'react'

function Counter() {
    const [n, setN] = useState(0)
    const [name, setName] = useState('Jerry')
  
    useEffect(() => {
      console.log("Component did mount");

      const interval = setInterval(()=> {
          setN((n) => n+1)
      }, 1000)


      return () => clearInterval(interval);


    }, [])
  
    useEffect(() => {
      console.log("N State updated!");
    }, [n])
  
    useEffect(() => {
      console.log("Name State updated!");
    }, [name])

    return (
        <div>
        <h2>{n}</h2>
    {/* <button onClick={()=> setN(n+1)}>click</button>
    <br />
    <hr />
    <h2>{name}</h2>
    <button onClick={()=> setName("Harry")}>click</button> */}
        </div>
    )
}

export default Counter
