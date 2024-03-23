import * as React from 'react';
import {
  ResumeCompanyHeading,
  ResumeGridMainContainer,
  ResumeGridRow,
  ResumeLeftGridBody,
  ResumeRightGridBody,
  ResumeSectionHeading,
} from './ResumeGridFormatting';

export default function ResumeEducationSection() {
  return (
    <ResumeGridMainContainer>
      <ResumeGridRow>
        <ResumeLeftGridBody children={<></>} />
        <ResumeSectionHeading>EDUCATION</ResumeSectionHeading>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>Boston, MA</ResumeLeftGridBody>
        <ResumeCompanyHeading>Northeastern University</ResumeCompanyHeading>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>September 2021 - May 2026</ResumeLeftGridBody>
        <ResumeRightGridBody>
          B.S. Computer Science and Design
        </ResumeRightGridBody>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>GPA: 3.86/4.0</ResumeLeftGridBody>
        <ResumeRightGridBody>
          <strong>Relevant Coursework</strong>: Human Computer Interaction |
          Object-Oriented Design | Algorithms and Data | Networks and
          Distributed Systems | Experience and Interaction | Design: Processes +
          Practices | Typographic Systems | Computer Systems | Game Programming
          | Mathematics of Data Models | Theory of Computation | Linear Algebra
        </ResumeRightGridBody>
      </ResumeGridRow>
    </ResumeGridMainContainer>
  );
}
