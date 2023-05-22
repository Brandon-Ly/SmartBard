import {useEffect, useState} from 'react';
import AuthContext from './AuthContext.js'
import {API_URL} from "../../common/constants";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userID, setUserID] = useState(null);
    const { navigate } = useNavigate();

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

    const validateLogin = async () => {
        console.log('login validation');
        const token = localStorage.getItem('access_token');
        const exptime = jwt_decode(token).exp;
        if (exptime * 1000 < new Date().getTime()) {
            // token is already expired - send back to home page
            logout();
            navigate('/');
        } else if ((exptime * 1000) - 30 * 60 * 1000 < new Date().getTime()) {
            const refresh = localStorage.getItem('refresh_token');
            if (!refresh) {
                logout();
                navigate('/');
            }
            // token expires in less than 30 mins - exchange for new token
            const tokenEndpoint = `${process.env.REACT_APP_SMARTBARD_LOGIN_URL}/oauth2/token`;
            const requestBody = {
                grant_type: 'refresh_token',
                client_id: process.env.REACT_APP_COGNITO_CLIENTID,
                refresh_token: refresh
            }
            const config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            };
            const urlEncodedBody = Object.keys(requestBody)
                .map(
                    (key) =>
                        encodeURIComponent(key) + "=" + encodeURIComponent(requestBody[key])
                )
                .join("&");
            console.log('exchanged');
            return axios
                .post(tokenEndpoint, urlEncodedBody, config)
                .then((res) => {
                    localStorage.setItem('access_token', res.data.access_token);
                    localStorage.setItem('id_token', res.data.id_token);
                })
        }
        console.log('valid');
    }

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
        validateLogin,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};

export default AuthProvider;