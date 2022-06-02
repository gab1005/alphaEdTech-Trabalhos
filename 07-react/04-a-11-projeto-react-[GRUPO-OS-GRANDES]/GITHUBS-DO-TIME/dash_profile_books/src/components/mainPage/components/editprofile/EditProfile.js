import React from "react";
import "./style.css";

export default class EditProfile extends React.Component {
  render() {
    return (
      <div className="edit--panel">
        <h2 className="edit--title">Edit Profile</h2>
          <input spellCheck='false' type={'text'} className='input--field' placeholder='Full Name'></input>
          <input spellCheck='false' type={'text'} className='input--field' placeholder='Username'></input>
          <input spellCheck='false' type={'email'} className='input--field' placeholder='New e-mail'></input>
          <input spellCheck='false' type={'password'} className='input--field' placeholder='New password'></input>
          <input spellCheck='false' type={'password'} className='input--field' placeholder='Confirm new password'></input>
          <input type={'submit'} className='input--submit' value={'Save'}></input>
      </div>
    );
  }
}
