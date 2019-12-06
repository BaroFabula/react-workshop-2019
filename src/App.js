import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { NameRawComponent } from "./components/NameRaw";
import Name from "./components/Name";
import { Counter } from "./container/Counter";
import { CounterWithHooks } from "./container/CounterWithHooks";
import BookList from "./container/BookList";
import { Link, NavLink, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <nav>
            <Link to={"/booklist"}>Booklist</Link><span>     </span>
            <Link to={"/counterhooks"}>Counter with hooks</Link><span>     </span>
            <NavLink to={"/counter"}>Counter</NavLink>
          </nav>
          <main>
            <Route exact path="/booklist" component={BookList} />
            <Route exact path="/counterhooks" render={() => <CounterWithHooks intialValue={0} language={'de'}/>} />
            <Route exact path="/counter" render={() => <Counter initialValue={0}/>} />
          </main>
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
