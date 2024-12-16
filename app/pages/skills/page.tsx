import SkillsImages from '@/app/components/skill/skill'
import { SKILL_SECTIONS } from '@/app/constants'
import React from 'react'

const Skills = () => {
  
  return (
    <div className='flex justify-around items-center h-screen'>
      {
        SKILL_SECTIONS.map(({title, image}, index: number)=>(
          <SkillsImages images={image} title={title} key={index}/>
        ))
      }
    </div>
  )
}

export default Skills
