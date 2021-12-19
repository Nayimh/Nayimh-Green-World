import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

import ExplorePlants from "./Pages/Explore/Explore/ExplorePlants";

import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Security/Login/Login";
import Register from "./Pages/Security/Register/Register";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/explore">
            <ExplorePlants/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
