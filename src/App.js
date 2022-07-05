import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Addpet from './pages/addpet/Addpet';
import {BrowserRouter as Router, Switch,Route,useLocation,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <button className="home">
        Home
      </button>

      <Switch>
        <Route exact path="/add">
        <Addpet/>


        </Route>
        <Route exact path="/">
           <Home/>
        </Route>



      </Switch>


 
    </div>
  );
}

export default App;
