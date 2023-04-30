import React from 'react'
import Lottie from "lottie-react";
import './css/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Signal from '../animations/signal.json'; 


function Aboutpage() {
    return ( 
        <div className='rounded-xl'>
            <Container>
                <Row className='textbackground text-center'>
                    <Col md={7} >
                        <p className='text-slate-200 text-2xl mt-12 ml-8 font-Raleway'>I'm a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        
                    </Col>
                    <Col md={5}>
                    <Lottie animationData={Signal} />
                    </Col>
                </Row>
                <div>
                  <h1 className="text-center font-bolder mt-8 mb-8">SKILLS</h1>
                  <div className="text-center">
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>HTML5</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>CSS3</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>JavaScript</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>React Js</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>BootStrap</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>Tailwind CSS</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>Node Js</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>Mongo DB</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>C++</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>Python</a>
                  <a className='border-2 m-2 no-underline bg-slate-300 p-2 font-Raleway text-gray-700 hover:text-black rounded-xl text-lg'>Linux</a>
                </div>
                </div>
            </Container>
        </div>
    )
}

export default Aboutpage 