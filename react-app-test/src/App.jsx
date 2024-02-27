import React, {useState} from 'react'
import { useEffect } from 'react';

function App() {
  const [exchangeData , setExchangeData] = useState({});
  const [bankData , setBankData] = useState({});
  console.log("re-render")
  
  useEffect(() => {
    setTimeout(() => {
      setBankData({income : 100})
    }, 3000);
  }, [])

  useEffect(function() {
    setTimeout(() => {
      setExchangeData({
        returns : 100
      })
    }, 1000);
  }, [])

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3

  return (
    <div>
        Hi there , your income tax returns are {incomeTax}
    </div>
  )
}

export default App




























// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   // console.log("Re-render from App")

//   return (
//     <div>
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>
//         Count is {count}
//       </button>
//     </div>
//   )
// }

// export default App
