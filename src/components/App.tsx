import React from 'react';
import { Link, Outlet } from "react-router-dom";
import '../css/App.css';

class App extends React.Component {

  render() {

      return (
        <div className="app-container">
            <nav className="nav-bar">
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/categories" className="nav-link">Категории</Link>
                <Link to="/recipes" className="nav-link">Рецепты</Link>
                <a href='http://127.0.0.1:8000/swagger/' className="nav-link">API</a>
            </nav>
            <Outlet />
        </div>
      );
  }
}

export default App;
