import { useState , useEffect} from 'react'
import './App.css'
import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const localToken = localStorage.getItem("Token");
    if(localToken){
      setToken(localToken);
    }
}, [])
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  )
}


export default App
