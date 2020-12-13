/* eslint-disable no-undef */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MyContext from '../Context/MyContext';
import config from '../config';

class NoteNoteTop extends Component {
    static contextType =MyContext; 

    handleClickDelete = e =>{
        e.preventDefault()
        const noteId = this.props.id;

        fetch(`${config.url}/notes/${noteId}`,{
            method : 'DELETE',
            heaeders : {
                'content-type' : 'application/json'
            }
        })
        .then(res=>{
            if(!res.ok){
                return res.json().then(error =>{throw error})
            }
        })
        .then(()=>{
            deleteItem(noteId);
        })
        .catch(e=>{
            console.log(e);
        })

    }

    render() {
        const date= new Date(this.props.modified);
        const formatDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
        return (
            <div>
                <Link to={`/note/${this.props.id}`}>
                    <p>{this.props.name}</p>
                </Link>
                <div>
                    Date Modified : {formatDate}
                </div>
                <button>Delete</button>
            </div>
        );
    }
}

    



export default NoteNoteTop;