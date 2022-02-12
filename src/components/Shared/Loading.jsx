import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Loader type="TailSpin" color="#00BFFF" height={20} width={20} />
        </div>
    );
}