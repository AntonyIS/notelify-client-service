import {FC} from "react";
import { ContentProps,ContentProp } from "../../types/Content";
import { Link } from "react-router-dom";
import { ContentHeader } from "./ContentHeader";



const linkStyle = {
    textDecoration: 'none',
};

const cardborder = {
    border: 'none',
    borderBottom: '1px solid #dee2e6'
};

export  const Contents:FC<ContentProps> = ({contents}) => {

    return (
        <div className="mt-2 mb-2">
            <p className="display-6">
                Articles
            </p>
            <div className="row">
                <div className="col-12">
                    {contents.map((content:ContentProp) => (
                        <Link to={`/posts/${content.content_id}`} style={linkStyle} >
                            <div className="card mb-2" style={cardborder}>
                                <div className="card-body" key={content.content_id}>
                                    <div className="row">
                                        
                                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                                           <ContentHeader content_title={content.title} content_publication_date={content.publication_date} user_firstname="Antony" user_lastname="Injila"  user_imagePath="/images/user1.png" />
                                            <p> {content.body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod sit magni praesentium cupiditate quis repudiandae a, harum beatae? Aliquid ut sint non cum ea? Atque esse cum asperiores dolorum!
                                            harum beatae? Aliquid ut sint non cum ea? Atque esse cum asperiores dolorum! harum beatae? Aliquid ut sint non cum ea? Atque esse cum asperiores dolorum! 
                                            </p>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                        <img src="/images/user1.png" style={{
                                                width: '100%',     
                                                height: '100%',   
                                                }}
                                            />
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