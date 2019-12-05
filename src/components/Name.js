import React from 'react';
import PropTypes from "prop-types";


const Name = ({name}) => {
    return (<div>Hello {name ? name : 'world'}</div>);
};
Name.propTypes = {name: PropTypes.string};
Name.defaultProps = {name: 'Anonymous'};
export default Name;
