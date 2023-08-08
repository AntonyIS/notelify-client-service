import {FC} from "react";
import { Link } from "react-router-dom";



const linkStyle = {
    textDecoration: 'none',
 };

const navbarStyle = {
    border: 'none',
    borderBottom: '1px solid #dee2e6'
}

export  const Navbar:FC = () => {
    return (
        <div>
            <nav className="navbar  bg-white" >
                <div className="container-fluid bg-white" style={navbarStyle}>
                    <Link to={`/`} style={linkStyle} >
                        <h3 className="fw-light text-dark">
                            Notelify
                        </h3>
                    </Link>
                </div>
            </nav>
        </div>
    )
}