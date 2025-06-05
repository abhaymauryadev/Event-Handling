import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleChange(event) {
    console.log(event.target.value)
  }


  function handleSumbit(e){
    e.preventDefault();
    // console.log('submit')
    alert("sumbit")
  }
  return (
    <form onSubmit={handleSumbit}>
    <div>
    <input type="text" onChange={handleChange} />
    <button type="sumbit">Submit</button>
   </div>
   </form>
  )
}

export default App
