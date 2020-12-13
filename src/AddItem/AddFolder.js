import React, { Component } from 'react';
import MyContext from '../Context/MyContext'
import config from '../config';

class AddFolder extends Component {
    static contextType=MyContext;

    handleSubmit = e => {
        e.preventDefault();
      
        const {newFolder} = e.target
        const folders = {
            folder : newFolder.value,
        }

        fetch(`${config.url}/folders`,{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({folders})
        })
        .then(res=>{
            if(!res.ok){
                return res.json().then(error=> {throw error})
            }
            return res.json();
        })
        .then(data=>{
            newFolder.value = '';
            this.context.AddFolder(data);
            this.props.history.push('/');
        })
        .catch(e=>{
            console.log(e);
        })
    }
    
    handleClickCancel = () =>{
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Add Folder</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="newFolder">
                        Add Folder Name
                    </label>
                    <input text="type" name="newFolder" id="newFolder" placeholder="Name Required" required/>
                    <button type="submit">Save</button>
                    {' '}
                    <button type="button" onClick={this.handleClickCancel}>
                        Cancel
                    </button>
                </form>
            </div>
        );
    }
}

export default AddFolder;