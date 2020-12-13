import React, { Component } from 'react';
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
                <EachNote
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