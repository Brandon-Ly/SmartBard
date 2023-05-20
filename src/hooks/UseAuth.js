import {useContext} from 'react';
import AuthContext from '../components/Authentication/AuthContext.js';

const useAuth = () => {
    const {isAuthenticated, isAdmin, userID, setIsAdmin, setUserID, login, logout} = useContext(AuthContext);

    return {
        isAuthenticated,
        isAdmin,
        userID,
        setIsAdmin,
        setUserID,
        login,
        logout,
    };
};

export default useAuth;