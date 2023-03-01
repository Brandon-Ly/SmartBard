import { useContext } from 'react';
import AuthContext from '../components/Authentication/AuthContext.js';

const useAuth = () => {
    const { isAuthenticated, login, logout } = useContext(AuthContext);

    return {
        isAuthenticated,
        login,
        logout,
    };
};

export default useAuth;