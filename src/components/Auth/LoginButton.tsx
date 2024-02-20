import React, { useEffect } from 'react';
// import { HandleGitHubCallback, InitiateGitHubLogin } from '../../Services/authService';
import { LinkStyle, RoundButton } from '../../Styles/Styles';
import { Link } from 'react-router-dom';


const LoginButton: React.FC = () => {
    // const handleLogin = (): void => {
    //     InitiateGitHubLogin();
    // };
      
    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const code = urlParams.get('code');
    //     if (code) {
    //         HandleGitHubCallback(code);
    //     }
    // }, []);

  return (
    <Link 
        to={`/login`} 
        style={LinkStyle}
        >
            <button 
                type="button" 
                className="btn btn-outline-secondary fw-light text-dark m-1" 
                style={RoundButton}
            >
        Login
    </button>
    </Link>
  );
};

export default LoginButton;