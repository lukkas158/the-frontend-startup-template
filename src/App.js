import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
