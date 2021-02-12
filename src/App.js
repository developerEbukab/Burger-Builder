import './App.css';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder  />
      </Layout>
    </div>
  );
}

export default App;
