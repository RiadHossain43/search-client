import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Loader type="BallTriangle" color="gray" height={15} width={15} />
            <span className='text-gray-400'>Loading...</span>
        </div>
    );
}