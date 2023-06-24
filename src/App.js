import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./page/Home";
import Login from "./page/Login";

function App() {
  const [location, setLocation] = useState("home");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("email", email);
  console.log("password", password);

  return (
    <>
      <Header location={location} setLocation={setLocation} />
      {location === "home" ? (
        <Home email={email} password={password} />
      ) : (
        <Login setEmail={setEmail} setPassword={setPassword} />
      )}
    </>
  );
}

export default App;
