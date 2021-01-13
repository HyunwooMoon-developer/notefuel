import React, { Component } from 'react';
import MyContext from '../Context/MyContext';
import config from '../config';

class AddNote extends Component {
    static contextType=MyContext ;
    static defaultProps={
        history: {
            push : ()=>{}
        }
    }

    handleSubmit = e =>{
        e.preventDefault();
        const newNote = {
            note_name: e.target['note-name'].value,
            content: e.target['note-content'].value,
            modified : new Date(),
            folder_id : e.target['note-folder-id'].value,
        }
        fetch(config.NOTE_ENDPOINT , {
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newNote),
        })
        .then(res=>{
            if(!res.ok){
                res.json().then(error => {throw error})
            }
            return res.json();
        })
        .then(note=>{
           // console.log(note)
            this.context.addNote(note);
            this.props.history.push(`/folders/${note.folder_id}`)
        })
        .catch(e=>{
            console.log(e);
        })

    }

    handleClickCancel = () =>{
        this.props.history.push('/');
    }


    render() {
        const {folders} =this.context ;
        const optionList = folders.map(folder=> <option key={folder.folder_id} value={folder.folder_id}>{folder.folder_name}</option>)
        return (
            <div className="add-note">
                <form onSubmit={this.handleSubmit}>
                    <div className="note-field">
                    <label htmlFor="note-name" className="label">Name</label>
                    <br />
                    <input type="text" name="note-name" id="note-name" placeholder='add new note' required >
                    </input>
                    </div>
                    <div className="note-field">
                    <label htmlFor="note-content" className="label">Content</label>
                    <br />
                    <textarea id="note-content" name="note-content" />
                    </div>
                    <div className="note-field">
                    <select id="note-folder-id" name="note-folder-id">
                        {optionList}
                    </select>
                    </div>
                    <div className="note-field">
                    <button type="submit">save</button>
                    <button type="button" onClick={this.handleClickCancel}>
                        Cancel
                    </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddNote;