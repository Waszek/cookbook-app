import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <header>
          <Header/>
        </header>
      </div>

      <div className="main">
        <div className="navigation">
          <nav>
          <Navigation/>
          </nav>
        </div>
        <div className="content">
          <section>
          <Content/>
          </section>
        </div>
      </div>
      
      <div className="footer">
        <footer>
          <Footer/>
        </footer>
      </div>

    </div>
  );
}

export default App;
