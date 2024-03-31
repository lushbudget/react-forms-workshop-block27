import { useState } from "react";
const URL_API = `https://fsa-jwt-practice.herokuapp.com/signup`

const SignUpForm = ({ token, setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch(URL_API,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: { username },
            password: { password }
          })
        })
      const result = await response.json()
      setToken(result.token)
      localStorage.setItem(`TOKEN`, result.token);
      setError(result.error)
    } catch (error) {
      console.log("HOUSTON WE GOTTA PROBLEM");
      setError(error);
    }
  } 

  return (
    <>
      <h2>SIGN UP!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            value={username}
            placeholder="Write Name Here"
            onChange={(e) => setUsername(e.target.value)}></input>
        </label>
        <label>
          Password:
          <input 
          type="password"
          placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </input>
        </label>
        <button>Submit</button>
      </form>
    </>
  )  
}  

export default SignUpForm;