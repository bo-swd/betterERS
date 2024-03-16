import { useState } from "react";
import "./App.css";
import AdminLogin from "./components/AdminLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AdminLogin></AdminLogin>
    </>
  );
}

export default App;
