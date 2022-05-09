import './App.scss';
import { BrowserRouter} from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Hero from './pages/Hero/Hero';
import Projects from './pages/Projects/Projects';
import TechStack from './pages/TechStack/TechStack';
import Contact from './pages/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Hero exact path="/" component={Hero} />
      <Projects exact path="/projects" component={Projects} />
      <TechStack exact path="/tech" component={TechStack} />
      <Contact exact path="/contact" component={Contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
