import {
  useRoutes,
  Link,
  Outlet,
  useParams } from 'react-router-dom';


  import {
  BrowserRouter as Router,
  Route,
   } from 'react-router-dom';

import Routes from './Routes';




function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Home
          </Link>
          <Link to="/posts" style={{ padding: 5 }}>
          Posts
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
          About
          </Link>
      </nav>
      <Routes/>
    </Router>
  );
}

export default App;
