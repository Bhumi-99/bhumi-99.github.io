import './App.css';
import SidebarWithHeader from './Component/Navbar';
import Home from './Component/Home';
import Skills from './Component/Skills';
import Contacts from './Component/Contact';
import Projects from './Component/Projects';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      <SidebarWithHeader/>
      <Home/> 
      <About/>
      <Skills/>
      <Projects/>
      // <Contacts/>
    </div>
  );
}

export default App;
