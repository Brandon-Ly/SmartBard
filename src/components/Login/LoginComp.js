import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Form, Button, Container, Row } from "react-bootstrap";
import { CognitoUser } from 'amazon-cognito-identity-js';
import queryString from 'query-string';

import pool from './UserPool'
// import logo from "../../images/overbrook.png";


function LoginComp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function handleCallback() {
      const { code } = queryString.parse(window.location.search);

      if (code) {
        setIsLoading(true);
        const cognitoUser = new CognitoUser({
          Username: 'dummy',
          Pool: pool,
        });
        cognitoUser.confirmRegistration(code, true, function (err, result) {
          if (err) {
            console.error('Failed to confirm registration', err);
            setIsLoading(false);
            return;
          }
          cognitoUser.getSession(function (err, session) {
            if (err) {
              console.error('Failed to retrieve session', err);
              setIsLoading(false);
              return;
            }
            localStorage.setItem('access_token', session.getAccessToken().getJwtToken());
            localStorage.setItem('id_token', session.getIdToken().getJwtToken());
            localStorage.setItem('refresh_token', session.getRefreshToken().getToken());
            setIsLoading(false);

            //redirect the user to page
            navigate("/home")

          });
        });
      }
    }

    handleCallback();
  });

  function handleLoginClick() {

    const cognitoAuthUrl = `https://smbd-test.auth.us-east-1.amazoncognito.com/login?client_id=6t7iieu7iapoadjqj20di1j33h&response_type=code&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000`;

    window.location.replace(cognitoAuthUrl);
  }

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