import { useState } from 'react'
import './App.css'
import { RevenureCard } from './components/RevenueCard'

// story book

function App() {

  return (
    <div className="grid grid-cols-4">
      <RevenureCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} />
      
    </div>
  )
}

export default App



      
      
      // {/* <div className="bg-red-500 col-span-4">hi</div>
      //   <div className="bg-green-500 col-span-4">hi</div>
      //    <div className="bg-blue-500 col-span-2">hi</div> */}
      //    {/* <div className="bg-black">hi</div>
      //   <div className="bg-violet-500">hi</div> */}


      // {/* /* <div style={{display: "flex", justifyContent:"space-between"}}>
      // <div style={{backgroundColor: "red"}}>hi</div>
      //   <div style={{backgroundColor: "yellow"}}>hi</div>
      //   <div style={{backgroundColor: "green"}}>hi</div>
      // </div>

      // <div className="flex justify-between">
      // <div className="bg-red-500">hi</div>
      //   <div className="bg-green-500">hi</div>
      //   <div className="bg-blue-500">hi</div>
      // </div> */}
      // {/* // <div className="grid grid-cols-1 md:grid-cols-3">
      // // <div className="bg-red-500 ">Hi</div>
      // // <div className="bg-green-500 ">Hi</div>
      // // <div className="bg-blue-500 ">Hi</div> */}