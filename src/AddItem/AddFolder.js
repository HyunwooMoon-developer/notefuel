import React, { Component } from 'react';
import MyContext from '../Context/MyContext'
import config from '../config';

class AddFolder extends Component {
    static defaultProps={
        history:{
            push: () =>{}
        }
    }

    static contextType = MyContext;

    handleSubmit = e => {
        e.preventDefault();
      
        const folder={
            name: e.target['folder-name'].value
        }

        fetch(`${config.url}/folders`,{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({folder})
        })
        .then(res=>{
            if(!res.ok){
                return res.json().then(error=> {throw error})
            }
            return res.json();
        })
        .then(data=>{
            console.log(data)
            console.log(this.context)
            this.context.addFolder(data.folder);
            this.props.history.push(`/folder/${folder.id}`);
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
                    <label htmlFor="folder-name">
                        Add Folder Name
                    </label>
                    <input text="type" name="folder-name" id="folder-name" placeholder="Name Required" required/>
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