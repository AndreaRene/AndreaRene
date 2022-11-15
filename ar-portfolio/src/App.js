import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
// why is eslint saying "expecting a default case"
function App() {
  const [content, setContent] = useState('about');
  const Rendered = () => {
    switch (content) {
      case 'about':
        return <About />
        break;
      case 'portfolio':
        return <Portfolio />
        break;
      case 'contact':
        return <Contact />
        break;
      case 'resume':
        return <Resume />
        break;
    }
  }
  return (
    <div className="App">
      <Header content={content}
        setContent={setContent}
      />
      <Rendered />
      <Footer />
    </div>
  );
}

export default App;
