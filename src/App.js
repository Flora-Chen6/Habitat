import React, {useState} from "react";
import LoginForm from "./components/LoginForm";
import './components/index.css';


function App() {
  const adminUser = {
    email: "admin@habitate.com",
    password: "abc"
  }
  
const [user, setUser] = useState({name:"", email:""});
const [error,setError] = useState ("");

const Login = details => {
  console.log(details);
  if (details.email === adminUser.email && details.password === adminUser.password){
    console.log("Logged in");
    setUser({
      name: details.name,
      email: details.email
      });
  }else{
    console.log("details do not match!");
    setError("details do not match!");
  }
}

const Logout = () => {
  console.log("Logout");
  setUser({name: "", email: ""});
}

  return (
    <div className="App">
     {(user.email !== "") ? (
      <div className = "Welcome">
        <h2> Welcome, <span> {user.name}</span></h2>
        <p> 
        email: <span> {user.email}</span> <br></br>
        contact: xxxx <br></br>
        project: xxxx 
        </p>
        <button onClick = {Logout}> Logout</button>

      </div>
    ): <LoginForm Login = {Login} error = {error} />} 
    </div>
  );
}

export default App;

