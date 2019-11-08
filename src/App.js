import React, { Component } from 'react';
import Header from './components/Header'
import Headline from './components/Headline'
import './app.scss'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts"  desc="click the button to render posts"/>
        </section>
      </div>
    );
  }
}

export default App;
 