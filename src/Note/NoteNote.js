import React, { Component } from 'react';
import MyContext from '../Context/MyContext';
import NoteNoteTop from './NoteNoteTop';


class NoteNote extends Component {
    static contextType=MyContext;
    render() {
        const {notes} = this.context;
        const targetNote = notes.find(note=>{
            return note.id === this.props.match.params.noteId
        }) ||{id: ''}
        return (
            <div>
                <NoteNoteTop 
                    key={targetNote.id}
                    id={targetNote.id}
                    name={targetNote.name}
                    modified={targetNote.modified}
                    folderId={this.folderId}
                />
                <p>{targetNote.content}</p>
            </div>
        );
    }
}

export default NoteNote;