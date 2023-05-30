import {useContext} from 'react';
import AuthContext from '../components/Authentication/AuthContext.js';

const useAuth = () => {
    const {
        isAuthenticated,
        isAdmin,
        userID,
        setIsAdmin,
        setUserID,
        login,
        logout,
        validateLogin
    } = useContext(AuthContext);

    return {
        isAuthenticated,
        isAdmin,
        userID,
        setIsAdmin,
        setUserID,
        login,
        logout,
        validateLogin
    };
};

export default useAuth;