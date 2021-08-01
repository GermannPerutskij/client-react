import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import { Sidebar } from "./components/Sidebar";
import "./styles/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    window.innerWidth > 1100 ? true : false
  );

  return (
    <Router>
      <div className="flex-container">
        <Sidebar sidebarIsOpen={sidebarIsOpen} toggleOpen={setSidebarIsOpen} />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
