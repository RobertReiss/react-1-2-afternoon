import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data';
import Header from './components/Header'
import Card from './components/Card'

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      list: data,
      index: 0
    }
  }

  render() {
    console.log(this.state.list)
    return (
      <div className="App">
        <Header />
        <div id="card-component-wrapper"><Card person={this.state.list[this.state.index]}/></div> 
      </div>
    );
  }

}

export default App;
