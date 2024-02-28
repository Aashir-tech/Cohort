import { useContext, useState } from "react"
import { CountContext } from "./Context"

//wrap anyone that wants to use the teleported value inside a provider
function App() {
    const [count,setCount] = useState(0)

    return <div>
        <CountContext.Provider value={count}>
             <Count setCount={setCount}/>
        </CountContext.Provider>
    </div>
}

function Count({setCount}) {
    return <div>
        <CountRenderer />
        <Buttons setCount={setCount}/>
    </div>
}

function CountRenderer() {
    const count = useContext(CountContext)
    return <div>
        {count}
    </div>
}

function Buttons({setCount}) {
    const count = useContext(CountContext)
    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increase</button>

        <button onClick={() => {
            setCount(count - 1)
        }}>Decrease</button>
    </div>
}

export default App





























// import { Suspense } from "react";
// import {lazy} from "react";
// import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
// const Dashboard = lazy(() => import('./components/Dashboard'))
// const Landing = lazy(() => import('./components/Landing'))


// function App() {


//   return (
//     <div> 
//       <BrowserRouter>
//       <Appbar />
//         <Routes>
//             <Route path='/dashboard' element={
//               <Suspense ><Dashboard /></Suspense>
//             } />
//             <Route path='/' element={<Landing />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
    
//   )
// }

// function Appbar() {
//   const navigate = useNavigate()
//   return <div>
//     <div>
//         <button onClick={() => {
//           navigate('/');
//         }}>Landing Page</button>
//         <button onClick={() => {
//           navigate('/dashboard');
//         }}>Dashboard</button>
//       </div>
//   </div>
// } 

// export default App
