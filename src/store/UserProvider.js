import { useReducer } from 'react'
import UserContext from './user-context'

const initialState = {
    user: {},
    isLoggedIn: false,
}

const userReducer = (state, action) => {
    if (action.type === 'LogIn') {
        const userDetail = action.user;
        return {
            user: userDetail,
            isLoggedIn: true
        };
    }
    if (action.type === 'LogOut') {
        return {
            user: {},
            isLoggedIn: false
        }
    }
    return initialState;
}

const UserProvider = (props) => {
    const [user, dispatchUserAction] = useReducer(userReducer, initialState);

    const logInHandler = (userDetails) => {
        dispatchUserAction({ type: 'LogIn', user: userDetails })
    }
    const logOutHandler = () => {
        dispatchUserAction({ type: 'LogOut' })
    }

    const userContext = {
        user: user.user,
        isLoggedIn: user.isLoggedIn,
        logIn: logInHandler,
        logOut: logOutHandler
    }

    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;