import React ,{FC,useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { GetArticles, GetUser } from '../../http/api';
import { ArticleEntity , UserEntity} from '../../../core/domain';

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

const imageStyle = {
    width: '40px',     
    height: '40px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}
const ArticleimageStyle = {
    margin:"0px "
}

const cardStyle = {
    border: 'none',
};

export  const ArticleList:FC<ArticleList> = ({articles}) => {
    return (
        <>
          <div className="tab-content mt-3" id="myTabContent">
              {Array.isArray(articles) &&
                articles.map((article: ArticleEntity) => (
                  <Link
                    to={`/articles/${article.article_id}`}
                    style={linkStyle}
                    className="text-dark"
                    key={article.article_id}
                  >
                    <div className="col-12 shadow bg-body-tertiary rounded">
                      <div className="card mb-2" style={cardStyle}>
                        <div className="card-body">
                          <div className="row">
                            {/* Image on the left */}
                            <div className="col-md-4">
                              <img src="/images/article.jpg" className="img-fluid float-left" alt="..." style={ArticleimageStyle} />
                            </div>

                            {/* Article details on the right */}
                            <div className="col-md-8">
                            <div className="col-md-4">
                              <img src="/images/user1.png" style={imageStyle} />
                              <span className="text-secondary pr-3">
                                  {article.author?.firstname} {article.author?.lastname}
                                  
                              </span>
                            </div>
                              <h5 className='fw-light'>
                                {article.title}{" "}
                                <span style={headStringStlye}>
                                  {article.publish_date?.slice(0, 10)}
                                </span>{" "}
                              </h5>
                              <div className="mb-2">
                                
                              </div>
                              <p className="fw-lighter">
                                {article.body?.slice(0, 200)}...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
              ))}
          </div> 
        </>
    )
}