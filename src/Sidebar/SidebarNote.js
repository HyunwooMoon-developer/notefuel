import React, { Component } from 'react';
import MyContext from '../Context/MyContext';
import {Link} from 'react-router-dom';

class SidebarNote extends Component {
    static contextType = MyContext;

    render() {
        const {folders,notes} = this.context;
        const Note = notes.find(note=>{
            return note.id === this.props.match.params.noteId;
        })|| {folderId: this.props.match.params.noteId}
        const Folder = folders.find(folder =>{
            return folder.id === Note.folderId
        })
        return (
            <div>
                <Link to={"/"}>
                <button>Back</button>
                </Link>
            <div>
                <p>{Folder.name}</p>
            </div>
            </div>
        );
    }
}

export default SidebarNote;