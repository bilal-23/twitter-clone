import React from 'react';

const UserContext = React.createContext({
    user: {},
    isLoggedIn: false,
    login: (user) => { },
    logout: () => { },
});

export default UserContext;