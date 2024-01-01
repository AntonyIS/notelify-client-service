import React ,{FC} from 'react';

interface messageType {
    message: String;
}
  
export  const Response200:FC<messageType> = ({message}) => {
    return (
        <>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam debitis illo odit corrupti accusantium officiis est mollitia sapiente a laborum accusamus repudiandae eos magni consequatur, error commodi. Adipisci, minus iste.</p>
        </>
    )
}