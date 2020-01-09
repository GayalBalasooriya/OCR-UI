import React from 'react'
import ProjectSummary from './ProjectSummery'

const ProjectList = ({projects}) => {
     return (

         <div className="project-list section">

            {projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            })} 

            {/* <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary /> */}
     
         </div>

     )
 }

 export default ProjectList