import React, { Component } from 'react';
import EachNote from './EachNote';
import MyContext from '../Context/MyContext'
import {Link} from 'react-router-dom'


class NoteListMain extends Component {
    static contextType= MyContext;

    handleDeleteNote = noteId =>{
        this.props.history.push('/')
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
            <div>
                {noteList}
                <Link to={'/add-note'}>
                    <button>add note</button>
                </Link>
            </div>
        );
    }
}

export default NoteListMain;