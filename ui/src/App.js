import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Gos from './Gos'
import ApiService from './service/ApiService'

class App extends Component {

  componentDidMount() {
    ApiService.getGos().then(
        json => {
          this.setState({
            data: json
          })
        }
    );
    ApiService.addGo('shortcut', 'new href', 'desc');
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload. No
          </p>
          {
            this.state && this.state.data &&
            <div>
              <h2>Global Gos</h2>
              <Gos gos={this.state.data.global}/>

              <h2>Personal Gos</h2>
              <Gos gos={this.state.data.personal}/>
            </div>
          }
        </div>
    );
  }
}

export default App;
