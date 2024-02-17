import React, { useEffect } from 'react';
import { HandleGitHubCallback, InitiateGitHubLogin } from '../../Services/authService';
import { RoundButton } from '../../Styles/Styles';


const LoginButton: React.FC = () => {
    const handleLogin = (): void => {
        InitiateGitHubLogin();
    };
      
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            HandleGitHubCallback(code);
        }
    }, []);

  return (
    <button type="button" className="btn btn-outline-secondary fw-light text-dark m-1" onClick={handleLogin} style={RoundButton}>
        Login
    </button>
  );
};

export default LoginButton;