import SkillsImages from '@/app/components/skill/skill'
import { FRONTEND, SKILLS_TITLES, BACKEND, DATABASE, FAMILIAR_WITH } from '@/app/constants'
import React from 'react'

const Skills = () => {
  
  return (
    <div className='flex justify-around items-center h-screen'>
      {/* <h2 className='text-2xl font-bolder text-center'>SKILLS</h2> */}
      <SkillsImages images={FRONTEND} title={SKILLS_TITLES.FRONTEND_TITLE}/>
      <SkillsImages images={BACKEND} title={SKILLS_TITLES.BACKEND_TITLE}/>
      <SkillsImages images={DATABASE} title={SKILLS_TITLES.DATABASE_TITLE}/>
      <SkillsImages images={FAMILIAR_WITH} title={SKILLS_TITLES.FAMILIAR}/>
    </div>
  )
}

export default Skills
