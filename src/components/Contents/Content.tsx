import {FC, useEffect, useState} from "react";
import { AuthorProp, ContentProp } from "../../types/Content";
import { Link,useParams } from 'react-router-dom';
import { ContentHeader } from "./ContentHeader";



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
    const contentURL:string =  `http://127.0.0.1:8081/v1/contents/${id}`

    useEffect(() => {
        async function fetchData() {
          try {
            const response1 = await fetch(contentURL);
            const data1:ContentProp = await response1.json();
            setcontent(data1);
           
            let authorURL:string = `http://127.0.0.1:8080/v1/users/${data1?.creator_id}`
            const response2 = await fetch(authorURL);
            const data2 = await response2.json();
            setAuthor(data2);

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);


    return (
        <div className="container mt-2">
            <div className="card" style={linkStyle}>
                <div className="card-body">
                   <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <ContentHeader content_title={content?.title} content_publication_date={content?.publication_date} user_firstname="Antony" user_lastname="Injila"  user_imagePath="/images/user1.png" />
                            <p>
                                {content?.body}
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
                            {author?.contents?.map((item:ContentProp) => (
                                
                               <Link to={`/posts/n/${item.content_id}`} style={LinklinkStyle} key={item.content_id}>
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <h5 className="text-secondary">{item.title}</h5>
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