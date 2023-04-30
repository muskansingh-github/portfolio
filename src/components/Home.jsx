import React from 'react'
import Look from '../images/bg-img.png';
function Home(){
    return(
        <div className="grid grid-cols-2 mt-12 items-center justify-center" style={{marginBottom: "-15%"}}>
            
            <img src={Look} className="mb-44" style={{marginLeft: "-11.5rem"}} alt="" />
            <div className="mb-60" style={{marginLeft: "-11.5rem"}}>
            <div clasName="">
            <h1 className="font-Raleway text-7xl mt-2"> 
                &lt; coder &gt;
            </h1>
            <p className="mt-3 text-lg"> 
                Front end developer who focuses on writing <br/>clean, elegant and efficient code. Love HTML5, <br />CSS3, WordPress and a touch of JQuery.
            </p>
            
            </div> 
            <div className="mt-8">
            <a href="http://localhost:9002/download" className='border-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>DOWNLOAD CV</a> 
            </div>
            <div className="ml-96">
            <h1 className="font-Raleway text-7xl text-center"> 
                designer
            </h1>
            <p className="mt-3 text-lg">
                User Interface Designer with a passion for designing beautiful and functional user experiences. Minimalist who believes that less is more.
            </p>
            </div> 
            <div>
            <h1 className="font-primary text-8xl mt-12 text-slate-300 text-center">
                PORTFOLIO  
            </h1>
            
            </div>
            </div> 
            
             
        </div>
    )  
} 
export default Home; 
