import React, { Component } from 'react';
import EachNote from './EachNote';
import MyContext from '../Context/MyContext'
import {Link} from 'react-router-dom'
import ErrorBoundary from '../Context/ErrorBoundary';
import './Note.css';
import history from '../history';

class NoteListMain extends Component {
    static contextType= MyContext;

    handleDeleteNote = () =>{
       history.push('/')
    }

    render() {
    const {notes} = this.context;
    
    const noteList = notes.map(note =>{
        return (
            <EachNote 
                key={note.id}
                id={note.id}
                folderId={note.folderId}
                content={note.content}
                name={note.name}
                modified={note.modified}
                onDeleteNote = {this.handleDeleteNote}
            />
        )
    });

    return (
            <div className="note-list">
                <ErrorBoundary>
                {noteList}
                <Link to={'/add-note'}>
                    <button>Add</button>
                </Link>
                
                </ErrorBoundary>
            </div>
        );
    }
}

export default NoteListMain;