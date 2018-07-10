import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';

import Error from 'components/error/error';
import Home from 'components/home/home';

class Homepage extends Component {
  render () {
    if (this.props.data.pending) {
      return <div>Loading...</div>;
    } else if (this.props.data.rejected) {
      return <Error error={this.props.data.reason}/>;
    } else if (this.props.data.fulfilled) {
      return <Home data={this.props.data.value}/>;
    }
  }
}

Homepage.propTypes = {
  data: PropTypes.object
};

export default connect(() => ({
  data: 'https://51d104d3-f066-4c11-b8bd-a317ef5e448a.mock.pstmn.io/mp-data'
}))(Homepage);
