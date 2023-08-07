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
                        <h5 className="display-6">
                            Notlify
                        </h5>
                    </Link>
                </div>
            </nav>
        </div>
    )
}