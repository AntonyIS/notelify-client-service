import {FC} from "react";
import { Link } from "react-router-dom";



const linkStyle = {
    textDecoration: 'none',
    borderRadius : '30%'
 };

const navbarStyle = {
    border: 'none',
    borderBottom: '1px solid #dee2e6'
}

export  const Navbar:FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-white">
                <div className="container-fluid bg-white" style={navbarStyle}>
                    <Link to={`/`} style={linkStyle} >
                        <h3 className="fw-light text-dark">
                            Notelify
                        </h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       
                    </ul>
                    <Link to={`/`} style={linkStyle} className="btn btn-sm pt-2 mb-2 btn-outline-secondary">
                        <h6 className="fw-light">
                            Draft Article
                        </h6>
                    </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}