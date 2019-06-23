import React from 'react';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

function CloudinaryImg(){
  return(
    <div>
      <Image cloudName="gestalt" publicId="samples/sheep" width="0.2" crop="scale" />
    </div>
  )
}

export default CloudinaryImg;
