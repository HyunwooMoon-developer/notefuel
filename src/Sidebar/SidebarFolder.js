import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import ErrorBoundary from '../Context/ErrorBoundary';
import MyContext from '../Context/MyContext';
import './Sidebar.css';


class SidebarFolder extends Component {
    static contextType = MyContext;
    render() {
        const {folders} = this.context
        const folderLists = folders.map(folder =>{
            return(
                <li key={folder.folder_id}>
                    <NavLink to={`/folders/${folder.folder_id}`}
                            activeClassName='selected'>
                        {folder.folder_name}
                    </NavLink>
                </li>
            )
        })
        return (
            <div className="folderNav">
                <ErrorBoundary>
                <ul className="folderList">
                {folderLists}
                </ul>
                <Link to={'/add-folder'}>
                <button>Add</button>
                </Link>
                </ErrorBoundary>
            </div>
        );
    }
}

export default SidebarFolder;