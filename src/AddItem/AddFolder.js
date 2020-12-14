import React, { Component } from 'react';
import MyContext from '../Context/MyContext'
import config from '../config';
import './AddFolder.css';

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
            name: e.target['folder-name'].value,
            
        }

        fetch(`${config.url}/folders`,{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(folder)
        })
        .then(res=>{
            if(!res.ok){
                return res.json().then(error=> {throw error})
            }
            return res.json();
        })
        .then(data=>{
          console.log(data)
          //const newFolder = {id: data.id , name: folder.name} ;
            //console.log(this.context)
            this.context.addFolder(data);
            this.props.history.push(`/folder/${data.id}`);
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
            <div className="add-folder">
                <h1>Add Folder</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="folder-field">
                    <label htmlFor="folder-name">Name</label>
                    <br />
                    <input text="type" name="folder-name" id="folder-name" placeholder="Name Required" required/>
                    </div>
                    <div className="folder-field">
                    <button type="submit">Save</button>
                    {' '}
                    <button type="button" onClick={this.handleClickCancel}>
                        Cancel
                    </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddFolder;