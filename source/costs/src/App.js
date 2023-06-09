import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/pages/layout/Container';

function App() {
  return (
    <Router>

      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newproject">NewProject</Link>
      </ul>

      <Routes element= {
        <Container customClass = "min-height">
          <Route exact path="/" component={<Home/>}/>

          <Route exact path="/company" component={<Company/>}/>

          <Route exact path="/contact" component={<Contact/>}/>

          <Route exact path="/newproject" component={<NewProject/>}/>
        </Container>
      }/>

    </Router>
  );
}

export default App;
