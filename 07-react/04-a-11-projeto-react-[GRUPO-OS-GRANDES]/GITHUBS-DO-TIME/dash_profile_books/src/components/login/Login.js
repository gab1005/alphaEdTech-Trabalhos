import React from "react";

import './style.css'

export default class Login extends React.Component {
  render() {
    return (
      <div className="Layout">
        <div className='login--panel'>
          <h1 className='login--title'>
            MyHashProfiler
          </h1>
          <input spellCheck='false' type={'text'} className='input--field' placeholder='Username or email'></input>
          <input spellCheck='false' type={'password'} className='input--field' placeholder='Password'></input>
          <input type={'submit'} className='input--submit' value={'Login'} onClick={() => this.props.changeState('mainPage')}></input>
          <span className='has--account' onClick={() => this.props.changeState('register')}>Create account</span>
        </div>
      </div>
    );
  }
};
