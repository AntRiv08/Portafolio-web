import React from 'react'
import './SkillsInfoCard.css'

export const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className='skills-info-card'>
      <h6>{heading}</h6>
      <div className='skills-info-content'>
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className='skill-info'>
              <p>{item.description}</p>
              <p className='porcentage'>{item.porcentage}</p>
            </div>
            <div className='skill-progress-bg'>
              <div
                className='skill-progress'
                style={{ width: item.porcentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
