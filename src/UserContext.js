import React, { useState } from 'react'

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({children}) => {
    const [userlist, setUserList] = useState([]);
    return (
        <UserContext.Provider value={{userlist,setUserList}}>
            {children}
        </UserContext.Provider>
    );
}