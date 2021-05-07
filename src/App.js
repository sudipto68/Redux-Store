import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:productId">
            <ProductDetails />
          </Route>
          <Route path="*">
            <h3 className="text-center mt-5 pt-5">
              Error 404 | Page Not Found
            </h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
