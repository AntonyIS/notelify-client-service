import React ,{FC, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { GetArticle, GetAuthorArticles } from '../../http/api';
import { ArticleEntity} from '../../../core/domain';


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
    const [articles, setArticles] = useState<ArticleEntity[]>([])
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (article_id == undefined) {
                    setError("Undefined Article");
                } else {
                    const articleData = await GetArticle(article_id);
                    const authorArticles = await GetAuthorArticles(articleData.author.user_id);
                    setArticle(articleData);
                    setArticles(authorArticles);

                    
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
                            <h4 className="display-3 fw-bold">
                                {article?.title}
                            </h4>
                            <Link to={`/users/${article?.author_id}`} style={linkStyle} className='text-dark'>
                                <div className='mb-3'>
                                    <span className='mr-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                        </svg>
                                    </span>
                                    <span className='fw-lighter'>
                                        {article?.author.firstname} {article?.author.lastname}
                                    </span>
                                    <br />
                                    <span className='fw-lighter'>
                                        Published {article?.publish_date} 
                                    </span>
                                </div>
                            </Link>
                            
                            <img src="/images/article.jpg"  className="img-fluid mb-2"/>
        
                            <h6 className='display-6 fw-light'>{article?.subtitle}</h6>
                            <p className='fw-lighter'>{article?.body}</p>
                            
                        </div>
                        <div className='text-center mb-2'>
                            <p>. . . </p>
                            {article?.tags.map((tag:String)=>(
                                <button className="btn btn-info mr-3" style={{borderRadius: "25%",}}>{tag}</button>
                            ))}
                        </div>
                       
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                </div>
            </div>
            <div className='text-bg-light p-3 '>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-8">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                </svg>
                            </div>
                            <div>
                            <div>
                                <h6 className='fw-lighter'>Wriitem by {article?.author.firstname} {article?.author.lastname}</h6>
                                <p className='fw-lighter'>More from {article?.author.firstname} {article?.author.lastname}</p>
                            </div>
                            <div className="row">
                                {articles.map((article:ArticleEntity)=>(
                                    <div className="col-6 mb-3">
                                        <Link
                                            to={`/articles/${article.article_id}`}
                                            style={linkStyle}
                                            className="text-dark"
                                            key={article.article_id}
                                        >
                                        <div className="card">
                                            <img src="/images/article.jpg"   className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <img src="/images/user1.png" style={imageStyle} />
                                            <span className="text-secondary pr-3">
                                                {article.author?.firstname} {article.author?.lastname}
                                                
                                            </span>
                                                <h5 className="fw-light">{article.title}</h5>
                                                <p className="fw-lighter">
                                                    {article.body?.slice(0, 100)}...
                                                </p>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                    </div>

                    
                    
                </div>
            </div>
        </>
    )
}