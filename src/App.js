import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

import ExplorePlants from "./Pages/Explore/Explore/ExplorePlants";

import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Security/Login/Login";
import PrivateRoute from "./Pages/Security/PrivateRoute/PrivateRoute";
import Register from "./Pages/Security/Register/Register";


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/explore">
            <ExplorePlants/>
          </PrivateRoute>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
      </Switch>
      </Router>
     </AuthProvider>
     
    </div>
  );
}

export default App;
