/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Store from './Store';;
import SidebarMain from './Sidebar/SidebarMain';
import SidebarFolder from './Sidebar/SidebarFolder';
import SidebarNote from './Sidebar/SidebarNote';
import MyContext from './Context/MyContext';
import NoteListMain from './Note/NoteListMain';
import NoteFolder from './Note/NoteFolder';
import NoteNote from './Note/NoteNote';
import config from './config';
import AddFolder from './AddItem/AddFolder';
import AddNote from './AddItem/AddNote';

class App extends React.Component{
state ={
  folders : [],
  notes : []
}

FolderData(){
  fetch(`${config.url}/folders`)
  .then(res=>{
    if(!res.ok){
      res.json().then(error=>{
        throw error
      })
    }
    return res.json()
  })
  .then(data=>{
    this.setState({
      folders: data
    })
  .catch(e =>{
    console.log(e)
  })
  })
}

NoteData(){
  fetch(`${config.url}/notes`)
  .then(res=>{
    if(!res.ok){
      return res.json().then(error=>
        {throw error})
    }
  return res.json();
  })
  .then(data=>{
    this.setState({
      notes: data
    })
  })
  .catch(e=>{
    console.log(e);
  })
}

handleDeleteItem= noteId =>{
  this.setState({
    notes :this.state.notes.filter(note=> note.id !== noteId)
  })
}

addFolder = folder =>{
  this.setState({
    folder : [...this.state.folders, folder],
  })
}

  componentDidMount(){

    setTimeout(()=>this.setState(Store), 600);
  }

  render(){
    const value={
      folders : this.state.folders,
      notes: this.state.notes,
      deleteNote : this.handleDeleteNote,
      addFolder : this.addFolder,
      
    }

    return(
      <div className="app">
        <header className="app-header">
         <h1><Link to="/">Noteful</Link></h1>
        </header>
        <MyContext.Provider value={value}>
        <nav className="app-nav">
          <Route exact path='/' component={SidebarMain} />
          <Route path='/folder/:folderId' component={SidebarFolder} />
          <Route path='/note/:noteId' component={SidebarNote} />
          <Route path='/add-folder' component={AddFolder} />
        </nav>
        <main className="app-main"> 
        <Switch>
          <Route exact path='/' component={NoteListMain} />
          <Route path="/folder/:folderId" component={NoteFolder} />
          <Route path='/note/:noteId' component={NoteNote} />
          <Route path='/add-note' component={AddNote} />
        </Switch>
        </main>
        </MyContext.Provider>
        <footer className="app-footer">
            <p>present by Moon</p>
        </footer>
      </div>
    )
  }
}
export default App;
