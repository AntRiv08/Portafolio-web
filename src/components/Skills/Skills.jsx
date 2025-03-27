import { useState } from 'react'
import { SKILLS, SECONDARY_SKILLS } from '../../utils/data'
import { SkillCard } from './SkillCard/SkillCard'
import { SkillSecondaryCard } from './SkillSecondaryCard/SkillSecondaryCard'
import './Skills.css'
import { SkillsInfoCard } from './SkillsInfoCard/SkillsInfoCard'

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

  const handleSelectSkill = (data) => {
    setSelectedSkill(data)
  }

  return (
    <section className='skills-container' id='skills'>
      <h5>Tecnologías que manejo</h5>
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item)
              }}
            />
          ))}
        </div>
        <div className='skills-info'>
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
          <div className='skills secundary'>
            {SECONDARY_SKILLS.map((item) => (
              <SkillSecondaryCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
