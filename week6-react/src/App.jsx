import React, {useEffect, useState} from 'react'


function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res) {
        const json = await res.json()
        setTodos(json.todos)
      })
  } , [])
  

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title,description}) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App































// function App() {
//   return <div>
//     <CardWrapper>
//       Hi there
//     </CardWrapper>
//   </div>
  
  
// }

// function CardWrapper({children}) {
//   // console.log(children)
//   return <div style={{
//     border: "2px solid black"
//   }}>
//     {children}
//   </div>
// }

// function TextComponent() {
//   return <div>
//     Hi there
//   </div>
// }



// export default App






























// let counter = 4

// function App() {
//   const [todos, setTodos] = useState([{
//     id :  1,
//     title : "Go to gym",
//     description : "Go to gym Today"
//   } , {
//     id :  1,
//     title : "Eat food",
//     description : "Eat Today"
//   } , {
//     id :  1,
//     title : "Go to class",
//     description : "Go to class Today"
//     }
// ])

  // function updateTitle() {
  //   setTitle("My name is " + Math.random());
  // }

  // function addTodo() {
  //   setTodos([...todos , {
  //     id :counter++,
  //     title : Math.random() ,
  //     description : Math.random()
  //   }])

    // const newTodos = []

    // for(let i = 0; i < todos.length; i++) {
    //   newTodos.push(todos[i])
    // }
    // //newTodos = Todos
    // newTodos.push({
    //   id : 4,
    //   title : Math.random() ,
    //   description : Math.random()
    // })
    // //existingTodos + 1
    // setTodos(newTodos)
  // }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a Todo</button>
//       {todos.map(todo => <Todo key={todo.id} title = {todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

// export default App



// <div>
    //   <button onClick={updateTitle}>Click me to change the title</button>
    //   <Header title = {title}/>
    //   <Header title = "Aashir2"/>
    //   <Header title = "Aashir3"/>

// </div>


// const Header = React.memo(function Header({title}) {
//   return <div>
//     {title}
//   </div>
// })

