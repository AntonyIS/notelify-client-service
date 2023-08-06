import {FC, useEffect, useState} from "react";
import { ContentProp } from "../../types/Content";
import { useParams } from 'react-router-dom';



export  const Content:FC = () => {
    const { id } = useParams();
    const [content,setcontent] = useState<ContentProp>()
    const URL:string =  `http://157.175.153.161:8081/v1/contents/${id}`
    useEffect(() => {
        fetch(URL)
          .then(response => response.json())
          .then(data => {
            setcontent(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    
    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-body">
                    <div className="display-6">
                        {content?.title}
                    </div>
                    <p className="text-secondary">
                        {content?.body}
                    </p>
                </div>
            </div>
        </div>
    )
}