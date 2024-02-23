import React, { useEffect } from 'react';

import { LinkStyle, RoundButton } from '../../Styles/Styles';
import { Link } from 'react-router-dom';


const LogoutButton: React.FC = () => {
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

export default LogoutButton;