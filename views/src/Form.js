import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};

class Form extends Component {
  render() {
    return (
      <form className='form' action={this.props.action} method="POST">
        <TextField
          hintText="Titre" name="titre"
        /><br />
        <TextField
          hintText="Auteur" name="auteur"
        /><br />
        <TextField
          type='date' name="annee_de_publication"
        /><br />
        <TextField
          hintText="Nombre de pages" name="pages"
        /><br />
        <TextField
          type='date' name="date_de_creation"
        /><br />
        <RaisedButton type="submit" label="Envoyer" primary={true} style={style} />
      </form>
    );
  }

}

export default Form;
