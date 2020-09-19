import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      message: e.target.value
    })
    this.props.handleMessage(this.state.message)
  } 

  render() {
    // console.log(this.props)
    return (
      <div>
        <strong>Your message:</strong>
  <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.value}/>
      </div>
    );
  }
}

export default TwitterMessage;
