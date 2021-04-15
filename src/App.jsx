import "./App.css";
import { Switch, Route } from "react-router-dom";
import MapPage from "./Pages/MapPage/MapPage";
import Auth from "./Pages/Auth/Auth";
import Navbar from './Components/Navbar/Navbar';

function App() {
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

export default App;
