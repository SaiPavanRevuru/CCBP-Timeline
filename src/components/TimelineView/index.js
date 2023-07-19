// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = eachItem => {
    if (eachItem.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={eachItem.id} details={eachItem} />
    }
    return <CourseTimelineCard key={eachItem.id} details={eachItem} />
  }

  return (
    <div>
      <div>
        <div>
          <h1>
            MY JOURNEY OF <br /> CCBP 4.0
          </h1>
        </div>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
