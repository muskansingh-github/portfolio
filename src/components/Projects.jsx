import React from 'react'
import TopSection from "./TopSection" 
import Projectlist from './Projectlist'


const Projects = () => {
  return (
    <div>
      <TopSection heading="PROJECTS." text="Here are some of my most recent works" />
      <Projectlist /> 
    </div>  
  )
} 

export default Projects
  