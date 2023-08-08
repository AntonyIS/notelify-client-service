import {FC} from "react";
import { PostHeader, UserProp } from "../../types/Types";


export  const UserHead:FC<UserProp> = ({id, firstname, lastname, handle, contents, followers, following}) => {
    return (
        <div className="">
            {/* <img src="" style={{
                width: '30px',     
                height: '30px',   
                borderRadius: '50%',
                }}
            />
            <span className="text-secondary">{firstname} {lastname}</span> */}
        </div>
    )
}