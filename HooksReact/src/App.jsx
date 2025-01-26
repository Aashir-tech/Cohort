// import { useState } from 'react'
// import axios from "axios";
// import { useEffect } from 'react';
// import { useMemo } from 'react';

// function App() {

//   const [counter , setCounter] = useState(0);
//   const [inputValue , setInputValue] = useState(1);
//   const [count , setCount] = useState(0);

//   // let count = useMemo(() => {
//   //   let finalCount = 0;
//   //   for(let i = 0; i<=inputValue; i++) {
//   //     finalCount = finalCount + i
//   //   }
//   //   return finalCount;
//   // } , [inputValue])

//   useEffect(() => {
//     let finalCount = 0;
//       for(let i = 0; i<=inputValue; i++) {
//         finalCount = finalCount + i
//       }
//       setCount(finalCount)
//   } , [inputValue])

//   return (

//     <div>
//       <input onChange={function(e) {
//         setInputValue(e.target.value)
//       }} />
//       <br />
//       Sum from 1 to {inputValue} is {count}
//       <br />
//       <button onClick={() => {
//         setCounter(counter + 1)
//       }} >Counter {counter}</button>
//     </div>

//   )
// }

// export default App

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// const App = () => {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setRender(false);
//     }, 10000);
//   }, []);
//   return <>{render ? <MyComponent /> : <div>Other component</div>}</>;
// };

// Functional Components

// function MyComponent() {
//   useEffect(() => {
//     console.error("Component mounted");

//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return <div>Inside mY component</div>;
// }

// Class based components
// class MyComponent extends React.Component {
//   componentDidMount() {
//     // Perform setup or data fetching here
//     console.log("Component mounted")
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//     console.log("Component unmounted");
//   }

//   render() {
//     // Render UI
//     return <div>Inside My Component</div>
//   }
// }



// export default App;

// function App() {

//   const [selectedId,setSelectedId] = useState(1)

//   return (
//     <div>
//       <button onClick={() => {setSelectedId(1)}}>1</button>
//       <button onClick={() => {setSelectedId(2)}}>2</button>
//       <button onClick={() => {setSelectedId(3)}}>3</button>
//       <button onClick={() => {setSelectedId(4)}}>4</button>
//       <Todo id ={selectedId} />
//     </div>
//   )
// }

// function Todo({id}) {
//   const [todo , setTodo] = useState({});

//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
//       .then(function(response) {
//         setTodo(response.data.todo)
//       })
//   }, [todo])

//   return <div>
//     <h1>
//       {Todo.title}
//     </h1>
//     <h5>
//       {todo.description}
//     </h5>
//   </div>

// }

// export default App

// import { useState } from 'react'
// import axios from "axios";
// import { useEffect } from 'react';

// function App() {
//   const [todos , setTodos] = useState([])

//     async function main() {
//       const response = await axios.get("https://sum-server.100xdevs.com/todos")
//       setTodos(response.data.todos)
//     }

//     asyncuseEffect

//     useEffect(() => {
//       main()
//     } , [])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(function(response) {
//       setTodos(response.data.todos)
//     })
//   } , [])

//   return (
//     <>
//       {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
//     </>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }

// export default App


// Custom Hooks 

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://dummyjson.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//       })
//   }, [])

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} key={todo.id} />)}

//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.todo}
//     <br />
//     {todo.completed ? "Completed" : "Not Completed"}
//     <br />
//     <br />
//   </div>
// }

// export default App

// import React, { useEffect, useState } from 'react'
// import { useIsOnline } from './hooks/useIsOnline';



// const App = () => {
//   const isOnline = useIsOnline();

//   if(isOnline) {
//     return "You are online";
//   }

//   return "You are offline"
// }

// export default App


// Use Interval Hook

// import React, { useEffect, useState } from 'react'

// function useInterval(callback , timer) {
//   useEffect(() => {
//     setInterval(callback , timer);
//   } , [timer])
// }

// const App = () => {
//     const [count , setCount] = useState(0);

//     useInterval(() => {
//       setCount(c => c + 1);
//     }, 1000)

//   return (
//     <> 
//       Timer is at {count}
//     </>
//   )
// }

// export default App

// Use Debounce Hook

import React, { useEffect, useState } from 'react'

function useDebounce(value , delay) {
    const [debouncedValue , setDebouncedValue] = useState(value);

    useEffect(() => {
      let timeout = setTimeout(() => {
        setDebouncedValue(value);
      }, delay)

      return () => {
          clearTimeout(timeout);
      }
    } , [value])

    return debouncedValue

}

const App = () => {
  const [inputValue , setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue , 500);

  return (


    <>
    Debounced Value : {debouncedValue}
      <input 
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Search...'
      />
      

    </>
  )
}

export default App