/* eslint-disable no-unused-vars */
import React from 'react'
import {Route, Link, Switch} from 'react-router-dom';
import MyContext from '../Context/MyContext'

class SidebarMain extends React.Component{
    static contextType=MyContext;

  render(){
      const {folders} = this.context
      const folderLists = folders.map(folder =>{
          return(
              <div key={folder.id}>
                  <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
              </div>
          )
      })
      return (
        <div>
            {folderLists}
            <div>
                <Link to="/add-folder">
                <button>Add Folder</button>
                </Link>
            </div>
        </div>
      )
  }
}

export default SidebarMain;