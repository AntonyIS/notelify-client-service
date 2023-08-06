import React ,{FC, useState, useEffect} from 'react';
import { ContentProp, ContentProps } from '../../types/Content';
import { Contents } from '../Contents/Contents';
import { Recommendations } from '../Contents/Recommendations';



export const Home:FC<ContentProps> = ({contents})  =>{
  return (
    <>
       <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-md-8 col-lg-8 colxl-8">
                <Contents contents={contents}/>
            </div>
            <div className="col-sm-12 col-md-12 col-md-4 col-lg-4 colxl-4">
              <Recommendations />
            </div>
          </div>
        </div>
    </>
  );
}

