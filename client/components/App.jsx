import React, { Component } from 'react';
// import { render } from 'sass';
// import './stylesheets/styles.scss';

import SignInView from '../views/SignInView.jsx';
import SignUpView from '../views/SignUpView.jsx';
import HomePageView from '../views/HomePageView';
import PostView from '../views/PostView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'signup',
    };
    this.object = {
      signup: <SignUpView current={this.state.current}/>,
      signin: <SignInView />,
      homePage: <HomePageView />,
      post: <PostView />,
    };
  }

  render() {
    const currentView = this.object[this.state.current];
    return (
      <div>
        TRAVEL DREAMS APP
        {/* {this.object[{this.state.current}]} */}
        { currentView }
      </div>
    );
  }
}

export default App;
