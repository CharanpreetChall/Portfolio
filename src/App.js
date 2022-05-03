import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Hero from './pages/Hero/Hero';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Switch>
      <Hero />

    </Switch>
    </BrowserRouter>
  );
}

export default App;
