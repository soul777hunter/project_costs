import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>

      <Navbar/>

      <Routes element= {
        <Container customClass = "min-height">
          <Route exact path="/" component={<Home/>}/>

          <Route exact path="/company" component={<Company/>}/>

          <Route exact path="/contact" component={<Contact/>}/>

          <Route exact path="/newproject" component={<NewProject/>}/>

          <Route excat path="/projects" component={<Projects/>}/>
        </Container>
      }/>

      <Footer/>

    </Router>
  );
}

export default App;
