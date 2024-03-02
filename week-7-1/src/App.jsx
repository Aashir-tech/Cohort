import { useContext } from "react"
import { CountContext } from "./Context"
import { useRecoilState, useRecoilValue , RecoilRoot, useSetRecoilState } from "recoil"
import { countAtom, evenSelector } from "./store/atoms/count"

//wrap anyone that wants to use the teleported value inside a provider
function App() {

    return <div>
        <RecoilRoot>
             <Count/>
        </RecoilRoot>
    </div>
}

function Count() {
    console.log("re-render")
    // const value = useRecoilValue(countAtom)
    return <div>
        <CountRenderer />
        <Buttons />
        
    </div>
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);
    return <div>
        {count}
        <EvenRenderer />
    </div>
}

function EvenRenderer() {
    const isEven = useRecoilValue(evenSelector);

    return <div>
        {isEven ? "It is Even" : null}
    </div>
}

function Buttons() {
    // const [count , setCount] = useRecoilState(countAtom);

    const setCount = useSetRecoilState(countAtom);
    console.log("buttons re-rendered")
    return <div>
        <button onClick={() => {
            setCount(count => count + 1)
        }}>Increase</button>

        <button onClick={() => {
            setCount(count => count - 1)
        }}>Decrease</button>
    </div>
}

export default App

//Interview Question : 

/*
why do you use context API ?

-> To make rendering more performant - NO
-> To make syntax charm / get rid of prop drilling - YES 

State Management Libraries helps you maintain those 

*/




























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
