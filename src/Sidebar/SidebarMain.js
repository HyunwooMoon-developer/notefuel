/* eslint-disable no-unused-vars */
import React from 'react'
import {Route, Link, Switch} from 'react-router-dom';
import ErrorBoundary from '../Context/ErrorBoundary';
import MyContext from '../Context/MyContext'
import './Sidebar.css';

class SidebarMain extends React.Component{
    static contextType=MyContext;




  render(){
      const {folders, notes} = this.context

      const folderLists = folders.map(folder =>{
          return(
              <li key={folder.folder_id}>
                  <Link to={`/folders/${folder.folder_id}`}>{folder.folder_name}</Link>
              </li>
          )
      })
      return (
        <div className="folderNav">
            
            <ErrorBoundary>
            <ul className="folderList">
            {folderLists}
            </ul>
            <div>
                <Link to="/add-folder">
                <button>Add</button>
                </Link>
                
            </div>
            </ErrorBoundary>
        </div>
      )
  }
}

export default SidebarMain;