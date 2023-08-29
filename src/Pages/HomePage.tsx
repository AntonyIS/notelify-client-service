import React ,{FC, useEffect, useState} from 'react';
import { ArticleEntity } from '../Entities/Entities';
import { FetchContents } from '../Services/API';
import { ContentList } from '../components/Articles/ArticlesList';
import { ContentRecommendations } from '../components/Articles/ArticleRecommendations';



export const HomePage:FC = ()  =>{
   
    return (
      <>
        <div className="container p-1">
            <div className="row mt-1 mb-1">
                <div className="col-sm-12 col-md-12 col-md-8 col-lg-8 colxl-8">
                    <ContentList />
                </div>
                <div className="col-sm-12 col-md-12 col-md-4 col-lg-4 colxl-4">
                    <ContentRecommendations />
                </div>
            </div>
        </div>
      </>
    );
  }
  