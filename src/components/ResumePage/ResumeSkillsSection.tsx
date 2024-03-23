import * as React from 'react';
import {
  ResumeGridMainContainer,
  ResumeGridRow,
  ResumeLeftGridBody,
  ResumeRightGridBody,
  ResumeSectionHeading,
} from './ResumeGridFormatting';
import { skills } from '../../data/Resume/ResumeSkillsData';

export default function ResumeSkillsSection() {
  return (
    <ResumeGridMainContainer>
      <ResumeGridRow>
        <ResumeLeftGridBody children={<></>} />
        <ResumeSectionHeading>SKILLS</ResumeSectionHeading>
      </ResumeGridRow>

      {skills.map((skillSection) => {
        return (
          <ResumeGridRow>
            <ResumeLeftGridBody>{skillSection.category}</ResumeLeftGridBody>
            <ResumeRightGridBody>
              {skillSection.tools.join(' | ')}
            </ResumeRightGridBody>
          </ResumeGridRow>
        );
      })}
    </ResumeGridMainContainer>
  );
}
