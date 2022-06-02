import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import EditProfile from "./components/editprofile/EditProfile";
import MyBooks from "./components/mybooks/MyBooks";

import "./style.css";

export default class Main extends React.Component {
  render() {
    if(this.props.modal == "dashboard") {
      return (
        <div className="Layout">
          <div className="user--panel">
            <div className="prof--picture"></div>
            <span className="username">Pedro Silva</span>
            <div className="user--menu">
              <button className="activebtn" onClick={() => this.props.changeModal('dashboard')}>
                Dashboard
              </button>
              <button onClick={() => this.props.changeModal('editprofile')}>Edit Profile</button>
              <button onClick={() => this.props.changeModal('mybooks')}>My Books</button>
              <button>Help</button>
              <button>Logout</button>
            </div>
          </div>
          <div className="main--panel">
            <Dashboard />
          </div>
        </div>
      );
    }

    if(this.props.modal == "editprofile") {
      return (
        <div className="Layout">
          <div className="user--panel">
            <div className="prof--picture"></div>
            <span className="username">Pedro Silva</span>
            <div className="user--menu">
              <button className="activebtn" onClick={() => this.props.changeModal('dashboard')}>
                Dashboard
              </button>
              <button onClick={() => this.props.changeModal('editprofile')}>Edit Profile</button>
              <button onClick={() => this.props.changeModal('mybooks')}>My Books</button>
              <button>Help</button>
              <button>Logout</button>
            </div>
          </div>
          <div className="main--panel">
            <EditProfile />
          </div>
        </div>
      );
    }

    if(this.props.modal == "mybooks") {
      return (
        <div className="Layout">
          <div className="user--panel">
            <div className="prof--picture"></div>
            <span className="username">Pedro Silva</span>
            <div className="user--menu">
              <button className="activebtn" onClick={() => this.props.changeModal('dashboard')}>
                Dashboard
              </button>
              <button onClick={() => this.props.changeModal('editprofile')}>Edit Profile</button>
              <button onClick={() => this.props.changeModal('mybooks')}>My Books</button>
              <button>Help</button>
              <button>Logout</button>
            </div>
          </div>
          <div className="main--panel">
            <MyBooks />
          </div>
        </div>
      );
    }
  }
}
