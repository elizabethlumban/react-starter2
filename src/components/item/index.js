import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

class Item extends Component {
    render() {
        const { item: { id, text } } = this.props;
        return (
            <li> <Link to={`/${id}`}>{text}</Link> </li>
        );
    }
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string
    }),
};

export default Item;
