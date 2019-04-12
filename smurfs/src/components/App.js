import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

//import actions 
import { getSmurf, createSmurf } from '../actions'; 
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state={
      name: '',
      height: '',
      age: '', 
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

  handleAdd = (event) => {
    event.preventDefault();
    this.props.createSmurf(this.state);
  }

  render() {
    //console.log(this.props.smurfs)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <form onSubmit={this.handleAdd}>
          <input
            type="text"
            onChange={this.changeHandler}
            placeholder="Smurf Name..."
            value={this.state.addSmurf}
            name="name"
            required
          >
          </input>
          <input
            type="number"
            onChange={this.changeHandler}
            placeholder="Smurf Height..."
            value={this.state.smurfHeight}
            name="height"
            required
          >
          </input>
          <input
            type="number"
            onChange={this.changeHandler}
            placeholder="smurfAge..."
            name="age"
            value={this.state.smurfAge}
            required
          > 
          </input>
          <button>UPLOAD SMURF</button>
        </form>
        {this.props.smurfs.map((smurfs) => {
          return (
            <div key={Date.now()}>
              <h1>{smurfs.name}</h1>
              <p>{smurfs.height}</p>
              <p>{smurfs.age}</p>
              <button>Delete</button>
              <button>Update</button>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    smurfs: state.smurfs,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getSmurf, createSmurf } )(App);
