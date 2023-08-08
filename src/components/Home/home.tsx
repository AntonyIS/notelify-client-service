import React ,{FC} from 'react';
import { AppProps } from '../../types/Types';
import { Recommendations } from './recommendations';
import { ItemTabs } from './itemTabs';




export const Home:FC<AppProps> = ({posts, users,usersLoading,postsLoading})  =>{
  return (
    <>
       <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-md-8 col-lg-8 colxl-8">
                <ItemTabs posts={posts} users={users} usersLoading={usersLoading} postsLoading={postsLoading} />
            </div>
            <div className="col-sm-12 col-md-12 col-md-4 col-lg-4 colxl-4">
                <Recommendations />
            </div>
          </div>
        </div>
    </>
  );
}

