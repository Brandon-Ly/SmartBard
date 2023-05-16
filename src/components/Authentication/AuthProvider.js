import {useEffect, useState} from 'react';
import AuthContext from './AuthContext.js'
import {API_URL} from "../../common/constants";
import axios from 'axios';

const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userID, setUserID] = useState(null);

    const login = async (accessToken) => {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('is_auth', true);
        setIsAuthenticated(true);

        //Call API to get user Info.
        try {
            const response = await axios.get(`${API_URL}/users/self`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('id_token')}` }
            });
            
            
            setIsAdmin(response.data.admin);
            setUserID(response.data.userid);
            localStorage.setItem('userid', JSON.stringify(response.data.userid));
        } catch (error) {
            console.error("Failed to fetch user info", error);
            logout(); // Logout if there's an error
        }
    }

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('is_auth');
        setIsAuthenticated(false);
        setIsAdmin(false);
    };

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const auth = localStorage.getItem('is_auth');

        if (accessToken && auth) {
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        console.log(isAdmin);    
    })


    const value = {
        isAuthenticated,
        isAdmin,
        userID,
        setIsAdmin,
        setUserID,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};

export default AuthProvider;