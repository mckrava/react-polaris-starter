import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { push } from 'connected-react-router';

import ContentWrapper from './PageContenWrapperComponent';

class MainDashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return <ContentWrapper>{children}</ContentWrapper>;
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

export default connect(mapStateToProps, mapDispatchToProps)(MainDashboard);
