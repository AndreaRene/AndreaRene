import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import { useState } from 'react';
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
        //return <Contact />
        break;
      case 'resume':
        //return <Resume />
        break
    }
  }
  return (
    <div className="App">
      <Header content={content}
        setContent={setContent}
      />
      <Rendered />
    </div>
  );
}

export default App;
