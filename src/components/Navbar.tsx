import {FC} from "react";
import { Link } from "react-router-dom";



const linkStyle = {
    textDecoration: 'none',
    color:"#00000"
 };
  

export  const Navbar:FC = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={`/`} style={linkStyle} >
                        Notlify
                    </Link>
                </div>
            </nav>
        </div>
    )
}