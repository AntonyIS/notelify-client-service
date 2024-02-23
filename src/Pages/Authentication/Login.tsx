import React, { useEffect } from "react";
import { HandleGitHubCallback} from "../../Services/authService";
import { GITHUB_OAUTH } from "../../Config/Config";

export const Login: React.FC = () => {
    const handleGitHubLogin = (): void => {
        window.location.href = GITHUB_OAUTH;
    };
    const handleLinkedInbLogin = (): void => {
        window.location.href = GITHUB_OAUTH;
    };
      
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            console.log(code)
            HandleGitHubCallback(code);
        }
    }, []);
    return (
        <>
            <div className="container mt-3 fw-light">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <button type="submit" className="btn btn-info
                                     form-control">Login</button>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <p>Login with </p>
                                </div>
                                <button type="submit" className="btn btn-secondary form-control" onClick={handleGitHubLogin}>Github</button>
                                <button type="submit" className="btn mt-3 btn-primary form-control" onClick={handleLinkedInbLogin}>LinkedIn</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
                </div>
            </div>
        </>
    )
}