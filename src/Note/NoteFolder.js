import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EachNote from './EachNote';
import MyContext from '../Context/MyContext';
import ErrorBoundary from '../Context/ErrorBoundary';


class NoteFolder extends Component {
    static contextType= MyContext;
    render() {
        const {notes} = this.context;
        const filteredNote = notes.filter(note=>{
            return note.folderId === this.props.match.params.folderId;
        })
        const noteLists = filteredNote.map(note=>{
            return  <EachNote 
            key={note.id}
            id={note.id}
            folderId={note.folderId}
            content={note.content}
            name={note.name}
            modified={note.modified}
        />
        })
        return (
            <div>
                <ErrorBoundary>
                {noteLists}
                <Link to={'/add-note'}>
                    <button>Add</button>
                    </Link>    
                </ErrorBoundary>      
            </div>
        );
    }
}

export default NoteFolder;