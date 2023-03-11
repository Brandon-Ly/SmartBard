import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import useAuth from '../../hooks/UseAuth.js'

function LoginComp() {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {login} = useAuth();

    const clientId = '6t7iieu7iapoadjqj20di1j33h';
    const redirectUri = 'http://localhost:3000';

    useEffect(() => {
        const {code} = queryString.parse(window.location.search);

        if (code) {
            setIsLoading(true);
            exchangeAuthorizationCodeForToken(clientId, code, redirectUri)
                .then((tokens) => {
                    login(tokens.accessToken);
                    localStorage.setItem('id_token', tokens.idToken);
                    localStorage.setItem('refresh_token', tokens.refreshToken);
                    setTimeout(() => {
                        setIsLoading(false);
                        navigate('/home')
                    }, 500);
                    // Save the tokens to local storage, context, or state
                })
                .catch((error) => {
                    console.error(error);
                    setIsLoading(false);
                });
        }
    }, [navigate]);

    function handleLoginClick() {
        const cognitoAuthUrl = `https://smbd-test.auth.us-east-1.amazoncognito.com/login?client_id=6t7iieu7iapoadjqj20di1j33h&response_type=code&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000`;

        window.location.replace(cognitoAuthUrl);
    }

    const exchangeAuthorizationCodeForToken = (clientId, code, redirectUri) => {
        const tokenEndpoint =
            `https://smbd-test.auth.us-east-1.amazoncognito.com/oauth2/token`;

        const requestBody = {
            grant_type: 'authorization_code',
            client_id: clientId,
            redirect_uri: redirectUri,
            code: code,
        };

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };

        const urlEncodedBody = Object.keys(requestBody)
            .map(
                (key) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(requestBody[key])
            )
            .join("&");

        return axios
            .post(tokenEndpoint, urlEncodedBody, config)
            .then((res) => {
                const accessToken = res.data.access_token;
                const idToken = res.data.id_token;
                const refreshToken = res.data.refresh_token;
                return {accessToken, idToken, refreshToken};
            })
            .catch((err) => {
                console.log(err);
                return {};
            });
    };

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <button onClick={handleLoginClick}>Login</button>
            )}
        </div>
    );
}

export default LoginComp;
