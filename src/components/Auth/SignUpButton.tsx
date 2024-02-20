import React, { useEffect } from 'react';
import { LinkStyle, RoundButton } from '../../Styles/Styles';
import { Link } from 'react-router-dom';


const SignUpButton: React.FC = () => {
  return (
    <Link 
        to={`/signup`} 
        style={LinkStyle}
        >
            <button 
                type="button" 
                className="btn btn-outline-secondary fw-light text-dark m-1" 
                style={RoundButton}
            >
        SignUp
    </button>
    </Link>
  );
};

export default SignUpButton;