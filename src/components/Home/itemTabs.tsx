import {FC} from "react";
import { PostList } from "../Posts/PostList";
import { UserList } from "../Users/UserList";
import { AppProps } from "../../types/Types";


export  const ItemTabs:FC<AppProps> = ({posts, users}) => {
    return (
        <div className="">
           <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark active" id="golang-tab" data-bs-toggle="tab" data-bs-target="#golang" type="button" role="tab" aria-controls="golang" aria-selected="true">Go Programming</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="following-tab" data-bs-toggle="tab" data-bs-target="#following" type="button" role="tab" aria-controls="following" aria-selected="false">following</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="aws-tab" data-bs-toggle="tab" data-bs-target="#aws" type="button" role="tab" aria-controls="aws" aria-selected="false">AWS</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="k8-tab" data-bs-toggle="tab" data-bs-target="#k8" type="button" role="tab" aria-controls="k8" aria-selected="false">Kubernetes</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="Python-tab" data-bs-toggle="tab" data-bs-target="#Python" type="button" role="tab" aria-controls="Python" aria-selected="false">Python</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="javascript-tab" data-bs-toggle="tab" data-bs-target="#javascript" type="button" role="tab" aria-controls="javascript" aria-selected="false">ReactJS & Typscript</button>
                </li>
                
                {/* <li className="nav-item" role="presentation">
                    <button className="nav-link fw-light text-dark" id="blockchain-tab" data-bs-toggle="tab" data-bs-target="#blockchain" type="button" role="tab" aria-controls="blockchain" aria-selected="false">blockchain</button>
                </li> */}
                
                </ul>
            <div className="tab-content" id="myTabContent">
                <div className="mt-2 mb-2 tab-pane fade show active" id="golang" role="tabpanel" aria-labelledby="golang-tab">
                    <PostList posts={posts} loading={false}/>
                </div>
                <div className="tab-pane fade" id="following" role="tabpanel" aria-labelledby="following-tab">
                    <UserList users={users}/>
                </div>
            </div>
        </div>
    )
}