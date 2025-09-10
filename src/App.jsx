import { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import OrderForm from "./components/OrderForm.jsx";
import Home from "./components/Home.jsx";
import Confirmation from "./components/Confirmation.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <>
    <ScrollToTop/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/order">
        <OrderForm setOrderData={setOrderData} />
      </Route>
      <Route path="/confirmation">
        <Confirmation orderData={orderData} />
      </Route>
    </Switch>
    </>
  );
}

export default App;
