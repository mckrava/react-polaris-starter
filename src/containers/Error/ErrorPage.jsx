import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { someValue } = this.props;
    return (
      <div className="error-page-container">
        <h1>Hello Error World</h1>
        {someValue}
      </div>
    );
  }
}

const mapStateToProps = ({ common }) => ({
  someValue: common.someValue,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
