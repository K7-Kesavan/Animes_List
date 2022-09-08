
import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
        <div className="App">

            <Navbar/>

            <Switch>

                <Route exact path="/">
                   <Home/>
                </Route>

                <Route path="/wishlist">
                  <Wishlist/>
                </Route>
                
            </Switch> 

        </div>
    </Router>
  );
}

export default App;
