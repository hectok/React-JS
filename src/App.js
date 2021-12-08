import { React } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About/About.page';
import Store from './pages/Store/Store.page';
import Product from './pages/Product/Product.page';
import Login from './pages/Login/Login.page.jsx';
import Signin from './pages/SignIn/Signin.page.jsx';
import Nav from './Components/Nav/Nav.component';
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div>
          <Route exact path={["/login","/"]} component={Login} />
          <Route exact path="/singin" component={Signin} />
          <ProtectedRoute exact path="/store" component={Store} />
          <ProtectedRoute exact path="/about" component={About} />
          <ProtectedRoute path="/product/:id" component={Product} />
        </div>
      </Router>
    </div>
  );
}

export default App;