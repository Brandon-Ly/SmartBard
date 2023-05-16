import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import queryString from "query-string";
import axios from "axios";
import useAuth from "../../hooks/UseAuth.js";

function LoginComp() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const clientId = process.env.REACT_APP_COGNITO_CLIENTID;
  const redirectUri = process.env.REACT_APP_SMARTBARD_UI_URL;
  let isFetchingToken = false;

  useEffect(() => {
    const { code } = queryString.parse(window.location.search);

    if (code && !isFetchingToken) {
      setIsLoading(true);
      isFetchingToken = true;
      exchangeAuthorizationCodeForToken(clientId, code, redirectUri)
        .then((tokens) => {
          localStorage.setItem("id_token", tokens.idToken);
          localStorage.setItem("refresh_token", tokens.refreshToken);
          //Give more time to exchange tokens
          setTimeout(() => {
            login(tokens.accessToken);
            setIsLoading(false);
            navigate("/home");
          }, 1000);
          // Save the tokens to local storage, context, or state
          isFetchingToken = false;
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
          isFetchingToken = false;
        });
    }
    console.log("exchange called");
  }, []);

  function handleLoginClick() {
    const cognitoAuthUrl = `${
      process.env.REACT_APP_SMARTBARD_LOGIN_URL
    }/login?client_id=${clientId}&response_type=code&scope=email+openid+phone+profile&redirect_uri=${replaceRedirectUrl(
      redirectUri
    )}`;

    window.location.replace(cognitoAuthUrl);
  }

  function replaceRedirectUrl(url) {
    url = url.replaceAll(":", "%3A");
    return url.replaceAll("/", "%2F");
  }

  const exchangeAuthorizationCodeForToken = (clientId, code, redirectUri) => {
    const tokenEndpoint = `${process.env.REACT_APP_SMARTBARD_LOGIN_URL}/oauth2/token`;

    const requestBody = {
      grant_type: "authorization_code",
      client_id: clientId,
      redirect_uri: redirectUri,
      code: code,
    };

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

    return axios
      .post(tokenEndpoint, urlEncodedBody, config)
      .then((res) => {
        const accessToken = res.data.access_token;
        const idToken = res.data.id_token;
        const refreshToken = res.data.refresh_token;
        return { accessToken, idToken, refreshToken };
      })
      .catch((err) => {
        console.log(err);
        return {};
      });
  };

  return (
    <Container centered style={{ height: "300px" }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <button
          style={{ display: "block", margin: "auto" }}
          onClick={handleLoginClick}
        >
          Login
        </button>
      )}
    </Container>
  );
}

export default LoginComp;
