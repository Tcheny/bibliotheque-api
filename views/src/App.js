import React, { Component } from 'react';
import request from 'request';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import List from './List';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books : []
    }
  }

  componentDidMount() {
    request('http://localhost:8001/simplonBook/',(err,res,body)=>{
      console.log(body);
      this.setState({
        books : JSON.parse(body)
      })
      console.log(this.state.books);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Librairies Simplon</h1>
        <MuiThemeProvider>
          <Form action="http://localhost:8001/simplonBook/add"/>
          <List books={this.state.books}/>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
