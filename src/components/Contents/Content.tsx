import {FC, useEffect, useState} from "react";
import { AuthorProp, ContentProp,ContentProps } from "../../types/Content";
import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";



const LinklinkStyle = {
    textDecoration: 'none',
 };
  

const linkStyle = {
    border: 'none',
};
  
export  const Content:FC = () => {
    const { id } = useParams();
    const [content,setcontent] = useState<ContentProp>()
    const [author,setAuthor] = useState<AuthorProp>()
    const contentURL:string =  `http://157.175.153.161:8081/v1/contents/${id}`
    const authorURL:string =  `http://15.185.192.167:8080/v1/users/${content?.creator_id}`
    useEffect(() => {
        fetch(contentURL)
          .then(response => response.json())
          .then(data => {
            setcontent(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

      useEffect(() => {
        fetch(authorURL)
          .then(response => response.json())
          .then(data => {
            setAuthor(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
  
    return (
        <div className="container mt-2">
            <div className="card" style={linkStyle}>
                <div className="card-body">
                   <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <div className="display-6">
                                {content?.title}
                            </div>
                            <p className="text-secondary">
                                {content?.body}
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati voluptas nisi ipsa corrupti, modi blanditiis rerum exercitationem magnam earum. Molestiae explicabo blanditiis, iure alias nam et quas omnis debitis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati voluptas nisi ipsa corrupti, modi blanditiis rerum exercitationem magnam earum. Molestiae explicabo blanditiis, iure alias nam et quas omnis debitis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati voluptas nisi ipsa corrupti, modi blanditiis rerum exercitationem magnam earum. Molestiae explicabo blanditiis, iure alias nam et quas omnis debitis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati voluptas nisi ipsa corrupti, modi blanditiis rerum exercitationem magnam earum. Molestiae explicabo blanditiis, iure alias nam et quas omnis debitis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati voluptas nisi ipsa corrupti, modi blanditiis rerum exercitationem magnam earum. Molestiae explicabo blanditiis, iure alias nam et quas omnis debitis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati voluptas nisi ipsa corrupti, modi blanditiis rerum exercitationem magnam earum. Molestiae explicabo blanditiis, iure alias nam et quas omnis debitis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati voluptas nisi ipsa corrupti, modi blanditiis rerum exercitationem magnam earum. Molestiae explicabo blanditiis, iure alias nam et quas omnis debitis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati voluptas nisi ipsa corrupti, modi blanditiis rerum exercitationem magnam earum. Molestiae explicabo blanditiis, iure alias nam et quas omnis debitis.
                            </p>
                            
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="display-6">
                                {author?.firstname} {author?.lastname}
                            </div>
                            <p className="text-secondary">
                                {content?.body}
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum est laboriosam blanditiis ipsa quam labore neque culpa exercitationem consequatur illum rerum dolores odit, obcaecati ratione, quibusdam facere magni eum!</p>
                            {author?.contents?.map((content:ContentProp) => (
                                
                               <Link to={`/posts/${content.content_id}`} style={LinklinkStyle} >
                                    <div className="card mb-2">
                                        <div className="card-body" key={content.content_id}>
                                            <h5 className="text-secondary">{content.title}</h5>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}