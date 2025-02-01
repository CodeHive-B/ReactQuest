import '../App.css'
import Message from '../Message'
import Greeting from '../Greeting'

function Home() {

  return (
    <div>
      <h1>Welcome to React! 🚀</h1>
      <Message />
      <Greeting name="Felipe" />
      <Greeting name="Hellen" />
      <Greeting name="Liz" />
      <Greeting name="Buddy" />
    </div>
  ) 
}

export default Home
