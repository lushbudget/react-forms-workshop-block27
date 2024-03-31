import { useState } from "react";

const Authenticate = ({ token }) => {
  const [successMessage, setSuccessMessage] = useState(null)
  const handleClick = async () => {

    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
      const result = await response.json();
      setSuccessMessage(result.message)
    } catch (error) {
      console.log(`You got an error!`, error)
    }
  }


  return (
    <>
      <h2>Authenticate!</h2>
      <button onClick={handleClick}>PROVE IT!</button>
      <p>{successMessage}</p>

    </>

  )
};

export default Authenticate;