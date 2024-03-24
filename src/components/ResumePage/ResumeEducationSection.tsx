import * as React from 'react';
import { format } from 'date-fns';
import { GridMainContainer, GridRow } from '../Layout/GridFormatting';
import {
  ResumeCompanyHeading,
  ResumeLeftGridBody,
  ResumeRightGridBody,
  ResumeSectionHeading,
} from './ResumeGridFormatting';
import { education } from '../../data/Resume/ResumeEducationData';

export default function ResumeEducationSection() {
  return (
    <GridMainContainer>
      <GridRow>
        <ResumeLeftGridBody children={<></>} />
        <ResumeSectionHeading>EDUCATION</ResumeSectionHeading>
      </GridRow>

      <GridRow>
        <ResumeLeftGridBody>{education.location}</ResumeLeftGridBody>
        <ResumeCompanyHeading>{education.name}</ResumeCompanyHeading>
      </GridRow>

      <GridRow>
        <ResumeLeftGridBody>
          {format(education.startDate, 'MMMM yyyy')} -{' '}
          {format(education.endDate, 'MMMM yyyy')}
        </ResumeLeftGridBody>
        <ResumeRightGridBody>{education.major}</ResumeRightGridBody>
      </GridRow>

      <GridRow>
        <ResumeLeftGridBody>GPA: {education.gpa}/4.0</ResumeLeftGridBody>
        <ResumeRightGridBody>
          <strong>Relevant Coursework</strong>: {education.courses.join(' | ')}
        </ResumeRightGridBody>
      </GridRow>
    </GridMainContainer>
  );
}
