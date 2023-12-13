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
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <div className="card" style={cardStyle}>
                            
                            <div className="card-body p-0">
                                <Link to={`/users/${article?.author_id}`} style={linkStyle} className='text-dark'>
                                    <ContentCardHeader title={article?.title} publication_date={article?.publish_date} name={article?.author.firstname + " "+ article?.author.lastname} />
                                </Link>
                                <h4>{article?.subtitle}</h4>
                                <h6>{article?.introduction}</h6>
                                <p>
                                    {article?.body}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="card" style={cardStyle}>
                            <div className="card-body">
                                <Link  to={`/users/${article_id}`} style={linkStyle} className='text-dark' key={article_id}>
                                    <ContentCardHeader name={article?.author.about} />
                                </Link>
                                <div className="row">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}