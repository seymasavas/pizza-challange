import { useState } from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";
import OrderForm from "./components/OrderForm.jsx";
import Home from "./components/Home.jsx"
import Confirmation from "./components/Confirmation.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/order" component={OrderForm} />
      <Route path="/confirmation" component={Confirmation} />
    </Switch>

    </>
  )
}

export default App
