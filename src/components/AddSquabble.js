import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddSquabbles } from '../actions/AddSquabbles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

class AddSquabble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      authorText: '',
      opposerText: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('adding!');
    e.preventDefault();

    this.props.onClick(this.state);

    this.setState({
      title: '',
      authorText: '',
      opposerText: ''
    });
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Paper>
        <form onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="title">
          Title:
            </InputLabel>
            <Input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} autoFocus/>
          </FormControl>
          <br/>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="authorText">
          Your side of the story:
            </InputLabel>
            <Input type="textarea" name="authorText" value={this.state.authorText} onChange={this.handleInputChange} />
          </FormControl>
          <br/>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="opposerText">
          Their side of the story: 
            </InputLabel>
            <Input type="textarea" name="opposerText" value={this.state.opposerText} onChange={this.handleInputChange} />
          </FormControl>
          <br/>
          <Button type="submit" 
            value="Add" 
            fullWidth
            variant="raised"
            color="primary"
          >
          Create
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: squabble => {
      return dispatch(AddSquabbles(squabble));
    }
  };
};

export default connect( null, mapDispatchToProps)(AddSquabble);
