import React, { Component } from 'react';
import Header from './components/Header'
import Headline from './components/Headline'
import './app.scss'

const tempArr = [{
  fName: "Joe",
  lName: "Bloggs",
  email: "joebloggs@gmail.com",
  age: 24,
  onlineStatus: true
}]

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts"  
                    desc="click the button to render posts"
                    tempArr={tempArr} />
        </section>
      </div>
    );
  }
}

export default App;
 