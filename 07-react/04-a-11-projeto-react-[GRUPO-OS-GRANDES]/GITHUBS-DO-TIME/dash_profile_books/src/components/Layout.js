import React from "react";

import Register from "./register/Register";
import Login from "./login/Login";
import Main from "./mainPage/Main";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.changeModal = this.changeModal.bind(this);
    this.state = {currentPage: 'register', mainModal: 'dashboard'}
  }

  changeState(newState) {
    this.setState({ currentPage: newState })
  }

  changeModal(newModal) {
    this.setState({ mainModal: newModal })
  }

  render() {
    if(this.state.currentPage == 'register') {
        return <Register changeState={this.changeState} />
    }

    if(this.state.currentPage == 'login') {
        return <Login changeState={this.changeState} />
    }

    if(this.state.currentPage == 'mainPage') {
        return <Main changeState={this.changeState} modal={this.state.mainModal} changeModal={this.changeModal} />
    }
  }
};
