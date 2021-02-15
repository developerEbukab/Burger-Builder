import './App.css';
import Checkout from './Components/Checkout/Checkout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Hoc/Layout/Layout';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/" component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
