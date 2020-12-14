import React, { Component } from 'react';
import ErrorBoundary from '../Context/ErrorBoundary';
import MyContext from '../Context/MyContext';
import EachNote from './EachNote';


class NoteNote extends Component {
    static contextType=MyContext;
    render() {
        const {notes} = this.context;
        const Note = notes.find(note=>{
            return note.id === this.props.match.params.noteId
        }) ||{id: ''}
        return (
            <div>
                <ErrorBoundary>
                <EachNote
                    key={Note.id}
                    id={Note.id}
                    name={Note.name}
                    modified={Note.modified}
                    folderId={Note.folderId}
                    
                />
                <p>{Note.content}</p>
                </ErrorBoundary>
            </div>
        );
    }
}

export default NoteNote;