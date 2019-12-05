import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { NameRawComponent } from "./components/NameRaw";
import Name from "./components/Name";
import { Counter } from "./container/Counter";
import { CounterWithHooks } from "./container/CounterWithHooks";
import BookList from "./container/BookList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <BookList/>
          <hr/>
          <CounterWithHooks intialValue={0} language={'de'}/>
          <hr/>
          <Counter initialValue={0}/>
          <hr/>
          {React.createElement(Name, {name: 'BerndProps'}, [])}
          {React.createElement(Name, {}, [])}
          <hr/>
          <NameRawComponent/>
          <NameRawComponent name={'BerndRaw'}/>
          <hr/>
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
}

export default App;
