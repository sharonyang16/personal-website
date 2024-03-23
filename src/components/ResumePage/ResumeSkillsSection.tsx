import * as React from 'react';
import {
  ResumeGridMainContainer,
  ResumeGridRow,
  ResumeLeftGridBody,
  ResumeRightGridBody,
  ResumeSectionHeading,
} from './ResumeGridFormatting';

export default function ResumeSkillsSection() {
  return (
    <ResumeGridMainContainer>
      <ResumeGridRow>
        <ResumeLeftGridBody children={<></>} />
        <ResumeSectionHeading>SKILLS</ResumeSectionHeading>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>Programming Languages</ResumeLeftGridBody>
        <ResumeRightGridBody>
          JavaScript/TypeScript | HTML/CSS | Java | Python | C# | C/C++ | SQL
        </ResumeRightGridBody>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>Frameworks/Libraries</ResumeLeftGridBody>
        <ResumeRightGridBody>
          React | Express | Node.js | JUnit | Next.js | Gatsby
        </ResumeRightGridBody>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>Applications/Tools</ResumeLeftGridBody>
        <ResumeRightGridBody>
          Git | Figma | Unity | Illustrator | InDesign
        </ResumeRightGridBody>
      </ResumeGridRow>
    </ResumeGridMainContainer>
  );
}
