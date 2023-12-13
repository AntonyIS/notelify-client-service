import React ,{FC,useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { GetArticles, GetUser } from '../../internal/adapters/http/api';
import { ArticleEntity , UserEntity} from '../../internal/core/domain';

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

const cardStyle = {
    border: 'none',
    borderBottom: '1px solid #dee2e6',
    padding: "0px 0px 0px 0px"
};

export  const ArticleList:FC = () => {
    const [articles, setArticles] = useState<ArticleEntity[]>([])
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
          try {
            const articlesData = await GetArticles();
    
            if ('error' in articlesData) {
                setError(`An error occurred: ${articlesData.error}`);
            } else {
                setArticles(articlesData);
            }
          } catch (error) {
            setError(`An error occurred:`);
          }
        };
    
        fetchData();
      }, []); 
    
  
    return (
        <>  
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark active" id="golang-tab" data-bs-toggle="tab" data-bs-target="#golang" type="button" role="tab" aria-controls="golang" aria-selected="true">Go Programming</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="aws-tab" data-bs-toggle="tab" data-bs-target="#aws" type="button" role="tab" aria-controls="aws" aria-selected="false">AWS</button>
                </li>
            </ul>
            <div className="tab-content mt-3" id="myTabContent">
                <div className="mt-2 mb-2 tab-pane fade show active" id="golang" role="tabpanel" aria-labelledby="golang-tab">
                    <div className="row">
                        {error && <p>{error}</p>}
                       
                        {Array.isArray(articles) && articles.map((article:ArticleEntity) => (
                            <Link to={`/articles/${article.article_id}`} style={linkStyle} className='text-dark' key={article.article_id}>
                                <div className="col-12" >
                                    <div className="card mb-2" style={cardStyle}>
                                        <div className="card-body p-0">
                                        <h5>{article.title} <span style={headStringStlye}>{article.publish_date?.slice(0, 10)}</span> </h5>
                                        <div>
                                            <img src="/images/user1.png" style={imageStyle}/>
                                            <span className="text-secondary pr-3">{article.author?.firstname} <span style={headStringStlye}>Following {article.author?.following} Followers {article.author?.followers}</span></span> 
                                        </div>
                                            <p className=''>
                                            {article.body?.slice(0, 400)}...
                                            </p>
                                        </div>
                                    </div>
                                  
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            

            
        </>
    )
}