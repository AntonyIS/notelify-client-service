import {FC} from "react";
import { ContentCardHead} from "../../Entities/Entities";


const imageStyle = {
    width: '40px',     
    height: '40px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}

const headStringStlye = {
    fontSize:"10px"
}

export  const ContentCardHeader:FC<ContentCardHead> = ({title, publication_date, name,followers, following}) => {
    return (
        <>
           <h4>{title} <span style={headStringStlye}>{publication_date?.slice(0, 10)}</span></h4>
            <div>
                <img src="/images/user1.png" style={imageStyle}/>
                <span className="text-secondary pr-3">{name} <span style={headStringStlye}>Following {following} Followers {followers}</span></span> 
            </div>
        </>
    )
}