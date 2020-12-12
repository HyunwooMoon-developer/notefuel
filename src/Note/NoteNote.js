import React, { Component } from 'react';
import MyContext from '../Context/MyContext';
import NoteNoteTop from './NoteNoteTop';


class NoteNote extends Component {
    static contextType=MyContext;
    render() {
        const {notes} = this.context;
        const Note = notes.find(note=>{
            return note.id === this.props.match.params.noteId
        }) ||{id: ''}
        return (
            <div>
                <NoteNoteTop 
                    key={Note.id}
                    id={Note.id}
                    name={Note.name}
                    modified={Note.modified}
                    folderId={this.folderId}
                />
                <p>{Note.content}</p>
            </div>
        );
    }
}

export default NoteNote;