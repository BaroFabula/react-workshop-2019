import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { NameRawComponent } from "./components/NameRaw";
import Name from "./components/Name";
import { Counter } from "./container/Counter";
import { CounterWithHooks } from "./container/CounterWithHooks";
import BookList from "./container/BookList";
import { NavLink, Route } from "react-router-dom";
import BookDetails from "./container/BookDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <span><img src={logo} className="App-logo" alt="logo" /></span>
            <NavLink to={"/booklist"}>Booklist</NavLink><span>     </span>
            <NavLink to={"/counterhooks"}>Counter with hooks</NavLink><span>     </span>
            <NavLink to={"/counter"}>Counter</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path="/booklist" component={BookList} />
          <Route path="/book/:isbn" component={BookDetails}/>
          <Route exact path="/counterhooks" render={() => <CounterWithHooks intialValue={0} language={'de'}/>} />
          <Route exact path="/counter" render={() => <Counter initialValue={0}/>} />
          <Route path="/firsttask" render={() =>
              <>
                {React.createElement(Name, {name: 'BerndProps'}, [])}
                {React.createElement(Name, {}, [])}
                <hr/>
                <NameRawComponent/>
                <NameRawComponent name={'BerndRaw'}/>
              </>
          }/>
        </main>
      </div>
    );
  }
}

export default App;
