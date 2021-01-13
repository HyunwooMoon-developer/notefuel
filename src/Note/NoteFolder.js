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
            return note.folder_id === this.props.match.params.folder_id;
        })
        const noteLists = filteredNote.map(note=>{
            return  <EachNote 
            key={note.note_id}
            id={note.note_id}
            folderId={note.folder_id}
            content={note.content}
            name={note.note_name}
            modified={note.modified}
        />
        })
        return (
            <div className="note-list">
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