import React, { Component } from 'react';
import MyContext from '../Context/MyContext';
import {Link} from 'react-router-dom';
import ErrorBoundary from '../Context/ErrorBoundary';
import './Sidebar.css';

class SidebarNote extends Component {
    static contextType = MyContext;

    render() {
        const {folders,notes} = this.context;
        const Note = notes.find(note=>{
            return note.note_id === this.props.match.params.noteId;
        })|| {folderId: this.props.match.params.noteId}
        const Folder = folders.find(folder =>{
            return folder.folder_id === Note.folderId
        })||{name : ''}
        return (
            <div>
                <ErrorBoundary>
                <Link to={"/"}>
                <button>Back</button>
                </Link>
            <div>
                <p>{Folder.name}</p>
            </div>
            </ErrorBoundary>
            </div>
        );
    }
}

export default SidebarNote;