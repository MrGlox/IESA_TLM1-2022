import logo from "./logo.svg";
import "./App.css";

import List from "./components/List";
import Clock from "./containers/Clock";

import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Item title={data[0].title} status={data[0].status}>
          {data[0].children}
        </Item> */}

        <Clock />

        <List apparts={data}></List>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
