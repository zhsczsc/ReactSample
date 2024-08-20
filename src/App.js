/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          It's my first webpage
        </p>
      </header>
    </div>
  );
}

export default App;*/



import React from 'react';
import './App.css'; // 创建一个 CSS 文件以自定义样式

function App() {
  return (
    <div className="App">
      {/* 导航栏 */}
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* 主要内容 */}
      <main>
        <section id="home">
          <h1>Welcome to My Portfolio</h1>
          <p>This is a simple React website.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>Brief introduction about yourself.</p>
        </section>

        <section id="portfolio">
          <h2>My Work</h2>
          <p>Showcase your projects here.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>How people can reach you.</p>
        </section>
      </main>

      {/* 页脚 */}
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
