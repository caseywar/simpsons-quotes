import React from 'react';
import PropTypes from 'prop-types';

const Fetch = ({ onClick }) => (
    <>
    <h2>Get Simpsons Quotes</h2>
    <button onClick={onClick}>Fetch a Quote</button>
    </>
);

Fetch.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Fetch;
