import { useState } from "react"


function App() {
  
//React.Fragment

  

  return (
    <div> 
      <HeaderWithButton></HeaderWithButton>
      <Header title="Aashir2"></Header>
      <Header title="Aashir3"></Header>
    </div>
    
  )
}

function HeaderWithButton() {
  const [title, setTitle ] = useState("My name is Aashir");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
  </div>
}


function Header({title}) { //props , Here we have done object destructing

  return <div>
    {title} 
  </div>//props.title
}
export default App
