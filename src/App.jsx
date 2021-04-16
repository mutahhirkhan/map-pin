import {useEffect} from "react"
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MapPage from "./Pages/MapPage/MapPage";
import Auth from "./Pages/Auth/Auth";
import Navbar from './Components/Navbar/Navbar';
import { authListener } from "./Redux/auth/authActions";
import {connect} from "react-redux"

function App({authListener}) {
  useEffect(() => {
    // authListener()
  }, [authListener])
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={MapPage} />
        <Route exact path="/authentication" component={Auth} />
      </Switch>
    </div>
  );
}

var actions = {
  authListener,
}

export default connect(null, actions)(App);
