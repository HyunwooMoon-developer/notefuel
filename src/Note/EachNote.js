/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MyContext from '../Context/MyContext'
import config from '../config';
import PropTypes from 'prop-types'
import './Note.css';
import history from '../history';


class EachNote extends Component {
    static contextType=MyContext

    handleClickDelete = () =>{
        const noteId = this.props.id;

        fetch(`${config.url}/notes/${noteId}`,{
            method: 'DELETE',
            headers: {
             'Content-Type': 'application/json'
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
            history.push('/');
            // noteId.history.push('/');
           
        })
        .catch(e=>{
            console.log(e);
        })

    }
    render() {
        //console.log(this.props);
        const date= new Date(this.props.modified);
        const formatDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
        return (
            <div className="each-note">
                <Link to={`/note/${this.props.id}`}>
                <p>{this.props.name}</p>
                </Link>
                <button type="button" onClick={this.handleClickDelete} className="delete-button">Delete</button>
                <p>Modified : {formatDate}</p>
            </div>
        );
    }
}
EachNote.propTypes = {
    id: PropTypes
        .string
        .isRequired,
    name: PropTypes
        .string
        .isRequired,
    }
export default EachNote;