
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
