import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useMemo } from 'react';

function App() {

  const [counter , setCounter] = useState(0);
  const [inputValue , setInputValue] = useState(1);
  const [count , setCount] = useState(0);

  // let count = useMemo(() => {
  //   let finalCount = 0;
  //   for(let i = 0; i<=inputValue; i++) {
  //     finalCount = finalCount + i
  //   }
  //   return finalCount;
  // } , [inputValue])

  useEffect(() => {
    let finalCount = 0;
      for(let i = 0; i<=inputValue; i++) {
        finalCount = finalCount + i
      }
      setCount(finalCount)
  } , [inputValue])

  

  return (

    <div>
      <input onChange={function(e) {
        setInputValue(e.target.value)
      }} />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button onClick={() => {
        setCounter(counter + 1)
      }} >Counter {counter}</button>
    </div>

  )
}

export default App


































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

    // async function main() {
    //   const response = await axios.get("https://sum-server.100xdevs.com/todos")
    //   setTodos(response.data.todos)
    // }

    // asyncuseEffect

    // useEffect(() => {
    //   main()
    // } , [])

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
