import {FC} from "react";
import { ContentHead } from "../../types/Content";



export  const ContentHeader:FC<ContentHead> = ({content_title, content_publication_date, user_imagePath, user_firstname, user_lastname}) => {
    return (
        <div className="">
            <h5>{content_title} | <span style={{fontSize:"13px"}}>{content_publication_date}</span></h5>
            <img src={user_imagePath} style={{
                width: '30px',     
                height: '30px',   
                borderRadius: '50%',
                }}
            />
            <span className="text-secondary">{user_firstname} {user_lastname}</span>
        </div>
    )
}