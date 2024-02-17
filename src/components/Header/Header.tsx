import {FC} from "react";
import { Link } from "react-router-dom";
import { LinkStyle, NavbarStyle } from "../../Styles/Styles";
import { SearchInput } from "./SearchInput";
import { DraftPostButton } from "./DraftPostButton";
import { Notification } from "./Notification";
import { UserProfile } from "./UserProfile";
import LoginButton from "../Auth/LoginButton";

export  const Header:React.FC = () => {
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
                        <Link to={`/posts/draft`} style={LinkStyle} >
                           <DraftPostButton />
                        </Link>
                        
                        <LoginButton />
                        <Notification />
                        <UserProfile />
                    </div>
                </div>
            </nav>
        </div>
    )
}