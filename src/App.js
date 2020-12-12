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

class App extends React.Component{
state ={
  folders : [],
  notes : []
}

  getFolder =() =>{
    const url = 'http://localhost:3000/';
  fetch(url)
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, try it again')
    }
    return res.json();
  })
  .then(data=>{
    this.setState({folders: data})
  })
  .catch(e=>{
    console.log(e)
  })
}

  getNote= ()=>{
  fetch(`http://localhost:3000/`)
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, try it again')
    }
    return res.json();
  })
  .then(data =>{
    this.setState({notes: data})
  })
  .catch(e=>{
    console.log(e)
  })
}
  componentDidMount(){
    this.getNote();
    this.getFolder();
    setTimeout(()=>this.setState(Store), 600);
  }

  render(){
    const value={
      folders : this.state.folders,
      notes: this.state.notes,
      
    }

    return(
      <div className="app">
        <header className="app-header">
         <h1><Link to="/">Noteful</Link></h1>
        </header>
        <MyContext.Provider value={value}>
        <nav className="app-nav">
          <Route exact path='/' component={SidebarMain} />
          <Route path='/folder/:folderId' component={SidebarFolder}/>
          <Route path='/note/:noteId' component={SidebarNote}/>
        </nav>
        <main className="app-main"> 
        <Switch>
          <Route exact path='/' component={NoteListMain}/>
          <Route path="/folder/:folderId" component={NoteFolder}/>
          <Route path="/note/:noteId" component={NoteNote}/>
          <Route />
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
