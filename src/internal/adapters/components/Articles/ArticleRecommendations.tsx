import React ,{FC, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { ArticleEntity } from '../../../core/domain';

interface ArticleList {
    articles: ArticleEntity[];
}




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



export  const ContentRecommendations:FC<ArticleList>= ({articles}) => {
    return (
        <>
            <div className="row mt-3">
                
                {Array.isArray(articles) && articles.map((article:ArticleEntity) => (
                    <Link
                        to={`/articles/${article.article_id}`}
                        style={linkStyle}
                        className="text-dark"
                        key={article.article_id}
                    >
                        <div className="col-12 shadow bg-body-tertiary rounded" >
                            <div className="card mb-2 mb-1 p-2">
                                <div className="card-body p-0">
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
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}