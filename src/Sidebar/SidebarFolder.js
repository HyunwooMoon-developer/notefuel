import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import MyContext from '../Context/MyContext';


class SidebarFolder extends Component {
    static contextType = MyContext;
    render() {
        const {folders} = this.context
        const folderLists = folders.map(folder =>{
            return(
                <div key={folder.id}>
                    <NavLink to={`/folder/${folder.id}`}
                            activeClassName='selected'>
                        {folder.name}
                    </NavLink>
                </div>
            )
        })
        return (
            <div>
                {folderLists}
                <Link to={'/'}>
                <button>Add folder</button>
                </Link>
            </div>
        );
    }
}

export default SidebarFolder;