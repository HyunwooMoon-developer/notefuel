import React from 'react';

const MyContext = React.createContext({
    folders : [],
    notes : [],
    deleteItem : () => {},
    addNote : () => {},
    addFolder : () => {},
})

export default MyContext;