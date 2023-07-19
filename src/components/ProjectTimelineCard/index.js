// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} = details

  return (
    <>
      <div>
        <img src={imageUrl} alt="project" />
        <div>
          <h1>{projectTitle}</h1>
          <div>
            <AiFillCalendar color="#171f46" />
            <p>{duration}</p>
          </div>
        </div>
        <p>{description}</p>
        <a href={projectUrl}> Visit</a>
      </div>
    </>
  )
}

export default ProjectTimelineCard
