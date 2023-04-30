import Lottie from "lottie-react";
import Loading from '../animations/loading.json';
import React from 'react'

function Loader(){
    return(
        <div className="w-1/4 mx-auto mt-48">
            <Lottie animationData={Loading} />;
        </div>
    )
}
export default Loader;
