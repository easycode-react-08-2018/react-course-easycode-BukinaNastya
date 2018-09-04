import React, { Component } from 'react';

import './App.css';

const url = 'https://api.github.com/users';

class App extends Component {
state = {
  value: '',
  userName: '',
}

// FetchRepos(){
  
// }

FetchOrgs(){
  fetch(url + '/users/' + this.state.value + '/repos').then(response => response.json())
  .then (user => {
    console.log(user.userName)
  })
}

onChange = (event) => {
  this.setState({
    value: event.target.value,
  });
};

  render() {
    return (
      <div className="App">
        <input 
          value={this.state.value} 
          onChange={this.onChange}
          />
        <pre> user name: {this.state.value}</pre>
        <button
          // onClick={this.FetchRepos()}
        >Repositories</button>
        <button
        onClick={this.FetchOrgs()}
        >Organization</button>
      </div>
    );
  }
}

export default App;
