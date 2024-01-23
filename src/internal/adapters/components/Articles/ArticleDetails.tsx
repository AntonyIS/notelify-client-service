import React ,{FC, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { GetArticle, GetAuthorArticles } from '../../http/api';
import { ArticleEntity, UserEntity} from '../../../core/domain';
import { ResponsePage } from '../ResponsePages/ResponsePage';


const cardStyle = {
    border: "none"
}

const roundButton = {
    borderRadius: "60px",
    margin:"5px"
}
const linkStyle = {
    textDecoration: 'none',
    color:"#00000"
};

const imageStyle = {
    width: '40px',     
    height: '40px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}

const imageStyleLarge = {
    width: '100px',     
    height: '100px',   
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

    const username = `${article?.author.firstname} ${article?.author.lastname}`;
    const profileImage = `${article?.author.profile_image}`;
    return (
        <>
        {
            error ? (
                <div>
                     <ResponsePage message="Article not found" statusCode={"404"} />
                </div>
            ):(
                <div>
                    <div className='container'>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                <div className="card p-2" style={cardStyle}>
                                    <h4 className="display-3 fw-bold">
                                        {article?.title}
                                    </h4>
                                    <Link to={`/users/${article?.author_id}`} style={linkStyle} className='text-dark'>
                                        <div className='mb-3 fw-lighter'>
                                            <span className='mr-3'>
                                                <img src={article?.author?.profile_image} alt="" style={imageStyle} />
                                            </span>
                                            <span>
                                                {article?.author.firstname} {article?.author.lastname}
                                            </span>
                                            <br />
                                            <span>
                                                Published {article?.publish_date?.slice(0, 10)}  
                                            </span>
                                            
                                            <br />
                                            
                                        </div>
                                    </Link>
                                    
                                    <img src={"/images/article.jpg"}  className="img-fluid mb-2"/>

                                    <h6 className='display-6 fw-light'>{article?.subtitle}</h6>
                                    <p className='fw-lighter'>{article?.body}</p>
                                    
                                </div>
                                <div className='text-center mb-2'>
                                    <p>. . . </p>
                                    {article?.tags.map((tag:String)=>(
                                        <button className="btn btn-info mr-3" style={roundButton}>{tag}</button>
                                    ))}
                                </div>
                            
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                        </div>
                    </div>
                    <div className='text-bg-light'>
                        <div className='container'>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                    <div style={cardStyle}>
                                       <div className="">
                                            <div className="user-profile p-2 mb-2">
                                                <div className="row">
                                                    <div className="col-3">
                                                        <div className="card text-bg-light" style={cardStyle}>
                                                            <img src={article?.author?.profile_image} alt="" style={imageStyleLarge}  />
                                                            <Link
                                                                to={`/users/${article?.author.user_id}`}
                                                                style={linkStyle}
                                                                className="text-dark"
                                                                key={article?.author?.user_id}
                                                                >
                                                                <h6 className='fw-lighter'>Written by {article?.author.firstname} {article?.author.lastname}</h6>
                                                                <h6 className='fw-lighter'>Email {article?.author.email}</h6>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                                <div className="row">
                                                    <p className='fw-lighter'>{article?.author.about}</p>
                                                </div>
                                                
                                                
                                            </div>
                                            <hr />
                                            <div className="row">
                                                {articles
                                                   
                                                    .map((articleItem: ArticleEntity) => (
                                                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3" key={articleItem.article_id}>
                                                            <Link
                                                            to={`/articles/${articleItem.article_id}`}
                                                            style={linkStyle}
                                                            className="text-dark"
                                                            key={articleItem.article_id}
                                                            >
                                                            <div className="card" style={cardStyle} key={articleItem.article_id}>
                                                                <img src="/images/article.jpg" className="card-img-top" alt="..." />
                                                                <div className="card-body p-1">
                                                                    <img src={profileImage} style={imageStyle} />
                                                                    <span className="text-secondary">
                                                                        {username}
                                                                    </span>
                                                                    <h5 className="fw-light">
                                                                        {articleItem.title?.slice(0, 30)}...
                                                                    </h5>
                                                                    <p className="fw-lighter">
                                                                        {articleItem.body?.slice(0, 100)}...
                                                                    </p>
                                                                    
                                                                </div>
                                                            </div>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>

                                       </div>
                                    </div>                        
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}

