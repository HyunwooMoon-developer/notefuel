import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MyContext from '../Context/MyContext';

class NoteNoteTop extends Component {
    static contextType =MyContext; 
    render() {
        const date= new Date(this.props.modified);
        const formatDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
        return (
            <div>
                <Link to={`/note/${this.props.id}`}>
                    <p>{this.props.name}</p>
                </Link>
                <div>
                    Date Modified : {formatDate}
                </div>
                <button>Delete</button>
            </div>
        );
    }
}

    



export default NoteNoteTop;