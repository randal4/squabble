import React, { Component } from "react";
import { connect } from "react-redux";
import { AddSquabbles } from "../actions/AddSquabbles";

class AddSquabble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authorText: "",
      opposerText: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log("adding!");
    e.preventDefault();

    this.props.onClick(this.state);

    this.setState({
      title: "",
      authorText: "",
      opposerText: ""
    });
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Your side of the story:
          <input type="textarea" name="authorText" value={this.state.authorText} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Their side of the story: 
          <input type="textarea" name="opposerText" value={this.state.opposerText} onChange={this.handleInputChange} />
        </label>
        <br/>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: squabble => {
      return dispatch(AddSquabbles(squabble));
    }
  };
};

export default connect( null, mapDispatchToProps)(AddSquabble);
