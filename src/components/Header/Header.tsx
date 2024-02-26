import { Link } from "react-router-dom";
import { LinkStyle, NavbarStyle, RoundButton } from "../../Styles/Styles";
import { SearchInput } from "./SearchInput";
import { DraftPostButton } from "./DraftPostButton";
import { UserProfile } from "../User/UserProfile";
import LoginButton from "../Auth/LoginButton";
import { User } from "../../Types/Types";


interface HeaderProps {
    isLoggedIn: boolean;
    onLogout: () => void;
    user: User | null;
}
  
export const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout ,user}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-white fw-light">
                <div className="container-fluid bg-white" style={NavbarStyle}>
                    <div className="row align-items-center">
                        <div className="col-auto">
                        <Link 
                            to={`/`} 
                            style={LinkStyle}
                        >
                            <h3 className="fw-light text-dark">Notelify</h3>
                        </Link>
                        </div>
                        <div className="col">
                            <SearchInput />
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-lg-0">
                        
                        </ul>
                        {isLoggedIn ? (
                           <>
                                <Link 
                                    to={`/posts/draft`} 
                                    style={LinkStyle} 
                                >
                                <DraftPostButton />
                                </Link>
                                <button
                                    type="button" 
                                    className="btn btn-outline-secondary fw-light text-dark m-1" 
                                    onClick={onLogout} 
                                    style={RoundButton}
                                >
                                    Logout
                                </button>
                                <Link 
                                   to={`/users/${user?.user_id}`} 
                                   style={LinkStyle} 
                                >
                                    <UserProfile user={user} />
                                </Link>
                           </>
                        ) : (
                            <LoginButton />
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}