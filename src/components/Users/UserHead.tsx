import {FC, useEffect, useState} from "react";
import { UserEntity, userID } from "../../Entities/Entities";
import { FetchUser } from "../../Services/API";



const imageStyle = {
    width: '40px',     
    height: '40px',   
    borderRadius: '50%',
    margin:"0px 10px 10px 0px"
}

const headStringStlye = {
    fontSize:"10px"
}
export  const UserHead:FC<userID> = ({id}) => {
    const [user, setUser] = useState<UserEntity>({})
    useEffect(() => {
        FetchUser(id).then(data => setUser(data))
    }, [])
    return (
        <div>
            <img src="/images/user1.png" style={imageStyle}/>
            <span className="text-secondary pr-3">
                {user.firstname} {user.lastname}  <span style={headStringStlye}>Following {user.following} Followers {user.followers}</span>
            </span> 
        </div>
    )
}