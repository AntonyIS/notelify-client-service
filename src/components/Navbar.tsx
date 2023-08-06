import {FC} from "react";


export  const Navbar:FC = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Notlify</a>
                </div>
            </nav>
        </div>
    )
}