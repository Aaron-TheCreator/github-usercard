import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from "./components/Card";
import Followers from "./components/Followers";
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    console.log(`ab: App.js: App: constructor`);
    this.state = {
      user: {},
      followers_url: '',
      getUrl: 'https://api.github.com/users/'
      
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/Aaron-TheCreator`)
      .then((res) => {
        console.log(`ab: App.js: App: CDM: axios.then: res:`, res);
        this.setState({
          user: res.data,
          followers_url: res.data.followers_url
          
        })
        console.log(`ab: App.js: App: CDM: 'state updated': this.state.user:`,this.state.user, this.state.followers_url)
      })
      .catch((err) => {
        console.error(`ab: App.js: App: CDM: axios.catch: err:`, err)
      })

    
  }

  
  render() {
    console.log(`ab: App.js: App: render:`)
    return (
      <div className="App container">
       <header className="header">
       <h1>Github Usercard!</h1> 
       </header>
        <div className="cards">
          <Card user={this.state.user} /> 
          <Followers state={this.state} /> 
        </div> 
        
      </div>
    );
  }
  
}

export default App;
