import { useEffect, useState } from 'react'
import '../App.css'
import Message from '../Message'
import Greeting from '../Greeting'
import Footer from '../Footer'

function Counter() {

  const [count, setCountFelipe] = useState(0)

  const increment = () => setCountFelipe(count + 1);
  const decrement = () => setCountFelipe(count - 1);

  useEffect(() => {
    document.title = `Count ${count}`
  }, [count])

  return (
    <div>
      <h1>Welcome to React! 🚀</h1>
      <Message />
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button> &nbsp;
      <button onClick={decrement}>Decrement</button>
    </div>
  ) 
}

export default Counter
