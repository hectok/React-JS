import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About/About.page.jsx';
import Store from './pages/Store/Store.page.jsx';
import Login from "./pages/Login/Login.page.jsx";
import Product from './pages/Producto/Producto.page';
import Nav from './Components/Nav/Nav.component.jsx';
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute.component.jsx';
import './App.scss';


export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <ProtectedRoute exact path="/">
              <Login />
            </ProtectedRoute >
            <ProtectedRoute exact path="/" element={<Store/>} />
            <ProtectedRoute exact path="/about" component={About} />
            <ProtectedRoute path="/product/:id" component={Product} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}