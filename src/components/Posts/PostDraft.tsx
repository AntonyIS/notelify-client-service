import { FC } from "react";
import { BorderLessCard, LinkStyle, RoundButton } from "../../Styles/Styles";
import { Link } from "react-router-dom";

export const PostDraft:FC = () => {
    return (
        <>
            <div className="card text-bg-light mb-3" style={BorderLessCard}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <h6 className=''>Draft an Article ?</h6>
                            <Link to={`/posts/draft`} style={LinkStyle}>
                                <button className="btn btn-info" style={RoundButton}>Draft</button>
                            </Link>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">

                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}