import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [content, setContent] = useState('about');
  const Rendered = () => {
    switch (content) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div className='App'>
      <Header
        content={content}
        setContent={setContent}
      />
      <Rendered />
      <Footer />
    </div>
  );
}

export default App;
