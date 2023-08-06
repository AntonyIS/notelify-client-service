import {FC} from "react";
import { ContentProps,ContentProp } from "../../types/Content";
import { Link } from "react-router-dom";



const linkStyle = {
    textDecoration: 'none',
 };
  

export  const Contents:FC<ContentProps> = ({contents}) => {
    console.log(contents)
    return (
        <div className="mt-2 mb-2">
            <p className="display-6">
                Articles
            </p>
            <div className="row">
                <div className="col-12">
                    {contents.map((content:ContentProp) => (
                        <Link to={`/posts/${content.content_id}`} style={linkStyle} >
                            <div className="card mb-2">
                                <div className="card-body" key={content.content_id}>
                                    <h5>{content.title}</h5>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                                            <p>{content.body}</p>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                            <p>image</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}