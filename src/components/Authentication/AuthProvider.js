import { useState, useEffect } from 'react';
import AuthContext from './AuthContext.js'

const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (accessToken) => {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('is_auth', true);
        setIsAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('is_auth');
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const auth = localStorage.getItem('is_auth');

        if (accessToken && auth) {
            setIsAuthenticated(true);
        }
    }, [])


    const value = {
        isAuthenticated,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};  

export default AuthProvider;