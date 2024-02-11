import React, { useEffect } from 'react';
import { RoundButton } from '../../Styles/Styles';
import { InitializeUser } from '../../Services/apiService';
import { HandleGitHubCallback } from '../../Services/authService';


const LoginButton: React.FC = () => {
    const handleLogin = (): void => {
        InitializeUser();
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
