/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MyContext from '../Context/MyContext'
import config from '../config';



class EachNote extends Component {
    static contextType=MyContext
    static defaultProps = {
        onDeleteNote : () => {}
    }
    handleClickDelete = e =>{
        e.preventDefault()
        const noteId = this.props.id;

        fetch(`${config.url}/notes/${noteId}`,{
            method: 'DELETE',
            headers: {
             'content-type': 'application/json'
            }
        })
        .then(res=>{
            if(!res.ok){
                return res.json().then(error =>{throw error})
            }
            return res.json();
        })
        .then(()=>{
            this.context.deleteItem(noteId);
            this.props.onDeleteNote()

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
                <p>Modified : {formatDate}</p>
                <button type="button" onClick={this.handleClickDelete}>Delete</button>
            </div>
        );
    }
}

export default EachNote;