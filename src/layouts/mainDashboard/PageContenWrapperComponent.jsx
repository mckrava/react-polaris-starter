import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { push } from 'connected-react-router';

class PageContenWrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return <div className="main-content-wrapper">{children}</div>;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      push,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContenWrapperComponent);
