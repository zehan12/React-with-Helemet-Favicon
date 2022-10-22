import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Instagram from "./components/Instagram";
import Youtube from "./components/Youtube";
import Twitter from "./components/Twitter";
import Facebook from "./components/Facebook";
import { NavLink } from "react-router-dom";

const sites = ["youtube", "instagram", "facebook", "twitter"];
export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>--- use of React Helemt & React Favicon ---</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          {sites.map((site) => (
            <NavLink style={{ textDecoration: "none" }} to={`/${site}`}>
              {site}
            </NavLink>
          ))}
        </div>
      </div>
      <Switch>
        <Route path="/instagram">
          <Instagram />
        </Route>
        <Route path="/youtube">
          <Youtube />
        </Route>
        <Route path="/facebook">
          <Facebook />
        </Route>
        <Route path="/twitter">
          <Twitter />
        </Route>
      </Switch>
    </Router>
  );
}
