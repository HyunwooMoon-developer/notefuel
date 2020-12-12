/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext'

class EachNote extends Component {
    static contextType=MyContext
    render() {
        const {notes}= this.context;
        const date= new Date(this.props.modified);
        const formatDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
        return (
            <div>
                <Link to={`/note/${this.props.id}`}>
                <p>{this.props.name}</p>
                </Link>
                <p>Modified : {formatDate}</p>
            </div>
        );
    }
}
/*EachNote.propTypes = {
    id: PropTypes
    .string
    .isRequired,
    modified: PropTypes
    .string
    .isRequired,
    name : PropTypes
    .string
    .isRequired,
}
*/
export default EachNote;