
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Project from './components/projects/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
