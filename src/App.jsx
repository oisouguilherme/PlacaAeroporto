import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from "./components/Main";
import { Admin } from "./components/page/Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
