import {useContext} from 'react';
import AuthContext from '../components/Authentication/AuthContext.js';

const useAuth = () => {
    const {isAuthenticated, isAdmin, setIsAdmin, login, logout} = useContext(AuthContext);

    return {
        isAuthenticated,
        isAdmin,
        setIsAdmin,
        login,
        logout,
    };
};

export default useAuth;