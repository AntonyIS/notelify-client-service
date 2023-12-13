import React ,{FC, useEffect, useState} from 'react';
import { ArticleList } from '../components/Articles/ArticleList';
import { ContentRecommendations } from '../components/Articles/ArticleRecommendations';



export const HomePage:FC = ()  =>{
   
    return (
      <>
        <div className="container p-1">
            <div className="row mt-1 mb-1">
                <div className="col-sm-12 col-md-12 col-md-8 col-lg-8 colxl-8">
                    <ArticleList />
                </div>
                <div className="col-sm-12 col-md-12 col-md-4 col-lg-4 colxl-4">
                    <ContentRecommendations />
                </div>
            </div>
        </div>
      </>
    );
  }
  