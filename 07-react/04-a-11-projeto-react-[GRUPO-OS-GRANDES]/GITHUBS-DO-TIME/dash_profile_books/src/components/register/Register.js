import React from "react";

import './style.css';

export default class Register extends React.Component {
  render() {
    return (
      <div className="Layout">
        <div className='register--panel'>
          <h1 className='register--title'>
            MyHashProfiler
          </h1>
          <span className='register--subtitle'>Register</span>
          <input spellCheck='false' type={'text'} className='input--field' placeholder='Full Name'></input>
          <input spellCheck='false' type={'text'} className='input--field' placeholder='Username'></input>
          <input spellCheck='false' type={'email'} className='input--field' placeholder='E-mail'></input>
          <input spellCheck='false' type={'password'} className='input--field' placeholder='Password'></input>
          <input spellCheck='false' type={'password'} className='input--field' placeholder='Confirm password'></input>
          <input type={'submit'} className='input--submit' value={'Create account'}></input>
          <span className='has--account' onClick={() => this.props.changeState('login')}>I already have an account</span>
        </div>
      </div>
    );
  }
};
