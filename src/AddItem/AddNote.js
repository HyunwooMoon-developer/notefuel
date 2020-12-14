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
            name: e.target['note-name'].value,
            content: e.target['note-content'].value,
            folderId : e.target['note-folder-id'].value,
            modified : new Date(),
        }
        fetch(`${config.url}/notes` , {
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
            this.context.addNote(note);
            this.props.history.push(`/folder/${note.folderId}`)
        })
        .catch(e=>{
            console.log(e);
        })

    }

    render() {
        const {folders} =this.context ;
        const optionList = folders.map(folder=> <option key={folder.id} value="folder.id">{folder.name}</option>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="note-name">Name</label>
                    <input type="text" name="note-name" id="note-name" placeholder='add new note' required >
                    </input>
                    <br />
                    <label htmlFor="note-content">Content</label>
                    <textarea id="note-content" name="note-content" />
                    <br>
                    </br>
                    <select id="note-folder-id" name="note-folder-id">
                        <option value="null">...</option>
                        {optionList}
                    </select>
                    <br />
                    <button type="submit">save</button>
                </form>
            </div>
        );
    }
}

export default AddNote;