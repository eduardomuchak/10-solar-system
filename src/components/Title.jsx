import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="Title col-10 m-auto mt-5 mb-5">
        <h2 className="m-auto mt-3 mb-3">
          { headline }
        </h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = {
  headline: 'Planetas',
};

export default Title;
