import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

//import actions 
import { getSmurf } from '../actions'; 
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state={
    addSmurf: '', 
  }

  componentDidMount() {
    this.props.getSmurf();
  }

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form>
          <input
            onChange={this.changeHandler}
            placeholder="Add a smurf"
            value={this.state.addSmurf}
            name="addSmurf"
          >
          </input>
        </form>
        <button>GET THE SMURFS</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { getSmurf } )(App);
