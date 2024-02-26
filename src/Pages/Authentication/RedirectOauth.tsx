import { useEffect } from "react";
import { HandleGitHubCallback } from "../../Services/authService";
import { BorderLessCard } from "../../Styles/Styles";
import { useNavigate } from "react-router-dom";

export const RedirectOauth:React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            console.log("code",code)
            HandleGitHubCallback(code).then(() => {
                navigate('/');
            }).catch((error) => {
                console.error('Error processing GitHub callback:', error);
            });
        }
    }, [navigate]);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xm-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
                    <div className="col-xm-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="card" style={BorderLessCard}>
                            <div className="card-body mt-3" >
                                <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xm-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
                </div>
            </div>
        </>
    )
}