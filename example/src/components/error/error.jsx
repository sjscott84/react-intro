import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Error extends Component {
  render () {
    const cause = this.props.error.cause;

    if(cause === undefined) {
      return <h1>{this.props.error.toString()}</h1>;
    }

    return (
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col">
            <h1>Error</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>There was an error: {cause.detail}</p>
          </div>
        </div>
      </div>
    );
  }
}

Error.propTypes = {
  error: PropTypes.object
};

export default Error;
