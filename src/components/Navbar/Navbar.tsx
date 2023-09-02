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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                    </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}