import SkillsImages from '@/app/components/skill/skill';
import { SKILL_SECTIONS } from '@/app/constants';
import React from 'react';

const Skills = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center px-4 md:px-8 py-6'>
      {
        SKILL_SECTIONS.map(({title, image}, index: number) => (
          <div className="flex flex-col items-center" key={index}>
            <SkillsImages images={image} title={title} />
          </div>
        ))
      }
    </div>
  );
};

export default Skills;
