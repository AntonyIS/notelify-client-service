import React ,{FC, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContentCardHeader } from './ArticleCardHeader';
import { UserHead } from '../Users/UserHead';
import { GetArticle, GetUser } from '../../internal/adapters/http/api';
import { ArticleEntity , UserEntity} from '../../internal/core/domain';


const cardStyle = {
    border: "none"
}

const linkStyle = {
    textDecoration: 'none',
    color:"#00000"
};
const headStringStlye = {
    fontSize:"10px"
}

const imageStyle = {
    width: '40px',     
    height: '40px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}

export  const ArticleDetails:FC = () => {
    // Get article ID from URL params
    const { article_id } = useParams<string>();
    // Get article using article_id 
    const [article, setArticle] = useState<ArticleEntity>()
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (article_id == undefined) {
                    setError("Undefined Article");
                } else {
                    const articleData = await GetArticle(article_id);
                    setArticle(articleData);
                }
            } catch (error) {
                setError(`An error occurred: ${error}`);
            }
        };
    
        fetchData();
    }, [article_id]);

    
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div className="card p-2" style={cardStyle}>
                            <h1 className="display-3 fw-light">{article?.title}</h1>
                            <Link to={`/users/${article?.author_id}`} style={linkStyle} className='text-dark'>
                                <ContentCardHeader title={article?.title} publication_date={article?.publish_date} name={article?.author.firstname + " "+ article?.author.lastname} />
                            </Link>
                            <br />
                            <h6 className='display-6 fw-light'>{article?.subtitle}</h6>
                            <p className='fw-lighter'>{article?.body}</p>
                        </div>
                        <div className="card p-2" style={cardStyle}>
                            <img src="/images/article.jpg"  className="img-fluid mb-2"/>

                            <h6 className='fw-light'>Written by {article?.author.firstname + " " + article?.author.lastname }</h6>
                            <p className='fw-lighter'> {article?.author.followers} Followers</p>
                            <p className='fw-lighter'> {article?.author.about}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                </div>
            </div>
        </>
    )
}