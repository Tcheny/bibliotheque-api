import React, { Component } from 'react';
import Form from './Form';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

const customContentStyle = {
  textAlign : 'center'
};

class List extends Component {
  constructor(props) {
  super(props);
  this.state = {
    open: false,
    OneBook :''
  };
}

handleOpen = (index) => {
 this.setState({
   open: true,
   OneBook : this.props.books[index]
 },()=>this.state.OneBook);

};

handleClose = () => {
 this.setState({open: false});
};

  render() {
    return (
      <ul>
        {this.props.books.map((book, index)=> {
          return (
            <li key={index}>
              <h3>Titre : {book.titre}</h3>
              <p>Auteur : {book.auteur}</p>
              <p>Publication : {book.annee_de_publication}</p>
              <p>Pages : {book.pages}</p>
              <p>Création : {book.date_de_creation}</p>
              <RaisedButton href={`http://localhost:8001/simplonBook/${book._id}`} label='remove' primary={true} style={style}/>
              <RaisedButton onClick={()=>this.handleOpen(index)} label='edit' primary={true} style={style}/>
              <Dialog
                title="Change Book"
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                autoScrollBodyContent={true}
                contentStyle={customContentStyle}
              >
                <Form action={`http://localhost:8001/simplonBook/update/${this.state.OneBook._id}`}/>
              </Dialog>
            </li>

          )
        })
        }
      </ul>
    );
  }
}

export default List;
