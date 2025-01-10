import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const buttonStyle = {
    display: 'block',
    margin: '0 auto',  // Centers the button horizontally
    marginTop: '20px', // Adds some top margin for spacing
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return <button style={buttonStyle} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
