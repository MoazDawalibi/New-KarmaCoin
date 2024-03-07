import React from 'react'
import { UserImageURL } from '../Layout/app/Const';

const useImageError = ({currentTarget}:any) => {
    currentTarget.onerror = null;
    currentTarget.src=`${UserImageURL}`;
}

export default useImageError