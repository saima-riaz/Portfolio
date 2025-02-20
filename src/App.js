import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import AboutMe from './components/AboutMe';

function App() {
  console.log("App.js is rendering");

  return (
    <main>
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
