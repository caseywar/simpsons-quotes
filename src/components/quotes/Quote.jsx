import React from 'react';
import PropTypes from 'prop-types'

const Quote = ({ name, text, image }) => (
    <figure>
        <img src={image} alt={name}/>
        <figcaption>{text}</figcaption>
        <p>- {name}</p>
    </figure>
)

Quote.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Quote