// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {courseTitle, description, tagsList, duration} = details

  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle color="#171f46" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(eachTag => (
          <li key={eachTag.id}>
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
