// import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <div className="into-text">
        <a href="/">Portfolio</a>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
