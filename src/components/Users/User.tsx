import {FC} from "react";
import { UserProp } from "../../types/Types";
import { UserHead } from "./UserHead";

const cardborder = {
    // border: 'none',
    borderBottom: '1px solid #dee2e6'
};

export  const User:FC<UserProp> = ({id, firstname, lastname, handle, contents, followers, following}) => {
    return (
        <div className="card-body p-0" style={cardborder}>
             <UserHead
            />
            <div className="row">
                <div>
                    <img src="/images/user1.png" style={{
                        width: '70px',     
                        height: '70px',   
                        borderRadius: "50%",
                        padding:"10px"
                        }}
                    />
                    <span className="ml-2">
                        {firstname} {lastname} ,
                            <span style={{fontSize:"10px",}}>Following {following}</span>,
                            <span style={{fontSize:"10px",}}>Followers {followers}</span>
                        </span>
                </div>
                <div>
                    <div className="row">
                        
                    </div>
                </div>  
            </div>
    
        </div>
    )
}


