import * as React from 'react';
import { format } from 'date-fns';
import {
  ResumeCompanyHeading,
  ResumeGridMainContainer,
  ResumeGridRow,
  ResumeLeftGridBody,
  ResumeRightGridBody,
  ResumeSectionHeading,
} from './ResumeGridFormatting';
import { education } from '../../data/Resume/ResumeEducationData';

export default function ResumeEducationSection() {
  return (
    <ResumeGridMainContainer>
      <ResumeGridRow>
        <ResumeLeftGridBody children={<></>} />
        <ResumeSectionHeading>EDUCATION</ResumeSectionHeading>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>{education.location}</ResumeLeftGridBody>
        <ResumeCompanyHeading>{education.name}</ResumeCompanyHeading>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>
          {format(education.startDate, 'MMMM yyyy')} -{' '}
          {format(education.endDate, 'MMMM yyyy')}
        </ResumeLeftGridBody>
        <ResumeRightGridBody>{education.major}</ResumeRightGridBody>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>GPA: {education.gpa}/4.0</ResumeLeftGridBody>
        <ResumeRightGridBody>
          <strong>Relevant Coursework</strong>: {education.courses.join(' | ')}
        </ResumeRightGridBody>
      </ResumeGridRow>
    </ResumeGridMainContainer>
  );
}
