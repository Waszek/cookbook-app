import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="header">
          <header>
            <Header/>
          </header>
        </div>

        <div className="main">
          <div className="navigation">
            <aside>
            <Navigation/>
            </aside>
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
    </Router>
  );
}

export default App;
