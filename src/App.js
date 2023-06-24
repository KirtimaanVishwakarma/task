import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./page/Home";
import Login from "./page/Login";

function App() {
  const [location, setLocation] = useState("home");
  console.log(location);
  return (
    <>
      <Header location={location} setLocation={setLocation} />
      {location === "home" ? <Home /> : <Login />}
    </>
  );
}

export default App;
