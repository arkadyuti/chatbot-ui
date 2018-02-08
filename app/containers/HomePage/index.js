/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectHomePage from './selectors';


export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      inputMessage: null
    }
  }
  updateInputValue = (e) => {
    this.setState({
      inputMessage: e.target.value
    })
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.inputMessage)
  }
  render() {
    return (
      <main>
        <div className="chatbox-container">
          <div className="chatbox-wrapper">
            <div className="bot-reply"><span className="reply-box">Hi, it is  degrees outside in \. How is your hair feeling?</span></div>
            <div className="user-input"><span className="reply-box">BYE</span></div>
          </div>
        </div>
        <div className="chat-input-container">
          <form onSubmit={this.handleOnSubmit}>
            <input type="text" name="" id="chatInput" placeholder="Type your message here..." onChange={this.updateInputValue} />
            <button type="submit">SEND</button>
          </form>
        </div>
      </main>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
