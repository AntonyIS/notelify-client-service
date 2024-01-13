import React ,{FC} from 'react';
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
          <div className="mt-3" id="myTabContent">
              {Array.isArray(articles) &&
                articles.map((article: ArticleEntity) => (
                  <Link
                    to={`/articles/${article.article_id}`}
                    style={linkStyle}
                    className="text-dark"
                    key={article.article_id}
                  >
                    <div className="card mb-2" style={cardStyle}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="col-md-4">
                              <img src={article.author?.profile_image} style={imageStyle} />
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
                          <div className="col-md-4">
                            <img src="/images/article.jpg" className="img-fluid float-left" alt="..." style={ArticleimageStyle} />
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