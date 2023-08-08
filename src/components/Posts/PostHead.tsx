import {FC} from "react";
import { PostHeader } from "../../types/Types";



export  const PostHead:FC<PostHeader> = ({content_title, content_publication_date, user_imagePath, user_firstname, user_lastname}) => {
    return (
        <div className="">
            <h4>{content_title} <span style={{fontSize:"10px"}}>{content_publication_date}</span></h4>
            <img src={user_imagePath} style={{
                width: '30px',     
                height: '30px',   
                borderRadius: '50%',
                }}
            />
            <span className="text-secondary pr-3">{user_firstname} {user_lastname} <span style={{fontSize:"10px",}}>Following 0 Followers 0</span></span> 
            
        </div>
    )
}