import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  state = {
    message: ''
  }

  handleMessage = (msg) => {
    // console.log(msg)
    this.setState({
      message: msg
    })
  }

  render() {
    console.log(this.state.message)
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage handleMessage={this.handleMessage} maxChars={280} />
        


      </div>
    )
  }
}

export default App
