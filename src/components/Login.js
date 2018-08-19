import React, {Component} from 'react';
import { auth } from '../firebase';

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      user: '',
      password: '',
      error: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    auth.doSignInWithEmailAndPassword(this.state.user, this.state.password)
      .then(() => {
      })
      .catch(error =>{
        this.setState({
          error: error,
        });
      });

    this.setState({
      user: '',
      password: '',
      error: '',
    });
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='user' onChange={this.handleInputChange}/>
          <input type='password' name='password' onChange={this.handleInputChange}/>
          <button type='submit' value='Login'>Login</button>
        </form>

        { this.state.error && <p>{this.state.error.message}</p> }
      </div>
    );
  }

}

export default Login;