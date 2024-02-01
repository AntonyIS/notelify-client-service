import {FC} from "react";
import { Link } from "react-router-dom";
import { LinkStyle, NavbarStyle, RoundButton } from "../Styles/Styles";
import LoginButton from "./LoginButton";

export  const Header:FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-white">
                <div className="container-fluid bg-white" style={NavbarStyle}>
                    <Link to={`/`} style={LinkStyle} >
                        <h3 className="fw-light text-dark">
                            Notelify
                        </h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-lg-0">
                       
                    </ul>
                    <Link to={`/posts/draft`} style={LinkStyle} >
                        <button type="button" className="btn btn-outline-secondary fw-light text-dark m-1" style={RoundButton}>
                            Draft an article
                        </button>
                    </Link>
                    
                    <LoginButton />
                    </div>
                </div>
            </nav>
        </div>
    )
}