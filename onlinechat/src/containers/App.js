import React, { Component } from 'react';
import { connect } from 'react-redux';
import { personsFetchData } from "../action/persons";
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchData("api/muggers");
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.persons.map((persons, index) => {
            return  <li key={index}>
                      <div>Name :{persons.name}</div>
                      <div>Email :{persons.email}</div>
                      <div>Password :{persons.password}</div>
                    </li>
          })}
        </ul>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(personsFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
