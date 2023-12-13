import React ,{FC, useEffect, useState} from 'react';
import { ArticleEntity } from '../../Entities/Entities';
import { Link } from 'react-router-dom';
import { GetArticles } from '../../internal/adapters/http/api';



const linkStyle = {
    textDecoration: 'none',
    color:"#00000"
};
const headStringStlye = {
    fontSize:"10px"
}


const cardStyle = {
    border: 'none',
    borderBottom: '1px solid #dee2e6'
};

const imageStyle = {
    width: '40px',     
    height: '40px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}



export  const ContentRecommendations:FC = () => {
    const [articles, setArticles] = useState<ArticleEntity[]>([])
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const articlesData = await GetArticles();
    
            setArticles(articlesData);
          } catch (error) {
            setError(`An error occurred:`);
          }
        };
    
        fetchData();
      }, []); 
    
    return (
        <>
            <h4>Recommandations </h4>
            
            <div className="row">
                {Array.isArray(articles) && articles.map((article:ArticleEntity) => (
                    <Link to={`/posts/${article.author_info?.id}/${article.article_id}`} style={linkStyle} className='text-dark' key={article.article_id}>
                        <div className="col-12" >
                            <div className="card mb-2" style={cardStyle}>
                                <div className="card-body p-0">
                                <h4>{article.title} <span style={headStringStlye}>{article.publish_date?.slice(0, 10)}</span></h4>
                                <div>
                                    <img src="/images/user1.png" style={imageStyle}/>
                                    <span className="text-secondary pr-3">{article.author_info?.name} <span style={headStringStlye}>Following {article.author_info?.following} Followers {article.author_info?.followers}</span></span> 
                                </div>
                                {article.body?.slice(0, 100)}...
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}