import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class NameRawComponent extends Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.name}`);
    }
}

NameRawComponent.propTypes = {name: PropTypes.string};
NameRawComponent.defaultProps = {name: 'AnonymousRaw'};
