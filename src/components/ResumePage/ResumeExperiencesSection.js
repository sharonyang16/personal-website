import * as React from 'react';
import {
  ResumeCompanyHeading,
  ResumeGridMainContainer,
  ResumeGridRow,
  ResumeLeftGridBody,
  ResumeRightGridBody,
  ResumeSectionHeading,
} from './ResumeGridFormatting';
import { List, ListItemText, Typography } from '@mui/material';

const NERPMToolsBullets = ['Figma', 'UI/UX Design', 'Product Management'];

const NERPMDescriptionBullets = [
  "Lead the redesign of the landing page for NER's data visualization dashboard, Argos, communicating with engineers to determine the desired data to be displayed pertaining to the car during competition.",
  "Created high fidelity wireframes for the home page of NER's project management dashboard, FinishLine, that focuses on engaging and informing those not associated with the organization along with UI related to a feature that allows admins of the application to edit the content displayed on that home screen.",
];

const NERSWEToolsBullets = [
  'TypeScript',
  'React',
  'HTML/CSS',
  'Material UI',
  'Express',
  'Prisma',
  'Jest',
  'PostgreSQL',
];

const NERSWEDescriptionBullets = [
  'Resolved tickets pertaining to FinishLine in order to improve user experience and increase productivity for sub-teams within the organization, consisting of over 200 members.',
  'Created Pull Requests to address bugs, enhancements, and new features on the frontend, endpoints for new features on the backend, and migrating a section of the database to support the renaming of a state.',
];

const CAMDITToolsBullets = [
  'ServiceNow',
  'Snipe-IT',
  'macOS',
  'Windows',
  'Troubleshooting',
];
const CAMDITDescriptionBullets = [
  'Created and updated tickets in ServiceNow, documenting issues, troubleshooting steps, and solutions with clarity and detail to better team communication and optimize time taken to reach problem resolution.',
  "Supported the setup, troubleshooting, and maintenance of the college's equipment, consisting of desktop computers and displays in 7 computer labs, printers and plotters in 2 print rooms, and various laptops used by faculty and staff, and maintained the accuracy of the department’s inventory through Snipe-IT.",
  'Addressed questions and concerns from CAMD students, faculty, and staff regarding equipment and software managed by the department and other technologies managed at a university level.',
];

function ToolsList(items) {
  return (
    <List>
      <Typography variant='body1' fontWeight='bold'>
        Associated Tools/Skills
      </Typography>

      {items.map((bullet) => (
        <ListItemText
          primaryTypographyProps={{ variant: 'body1' }}
          key={bullet}
        >
          {bullet}
        </ListItemText>
      ))}
    </List>
  );
}

function BulletedList(items) {
  return (
    <List sx={{ listStyleType: 'disc' }}>
      {items.map((bullet) => (
        <ListItemText
          primaryTypographyProps={{ variant: 'body1' }}
          sx={{ display: 'list-item' }}
          key={bullet}
        >
          {bullet}
        </ListItemText>
      ))}
    </List>
  );
}

export default function ResumeExperiencesSection() {
  return (
    <ResumeGridMainContainer>
      <ResumeGridRow>
        <ResumeLeftGridBody />
        <ResumeSectionHeading>RELEVANT EXPERIENCE</ResumeSectionHeading>
      </ResumeGridRow>

      {/* NER */}
      <ResumeGridRow>
        <ResumeLeftGridBody>Boston, MA</ResumeLeftGridBody>
        <ResumeCompanyHeading>
          Northeastern Electric Racing (NER)
        </ResumeCompanyHeading>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>December 2023 - Present</ResumeLeftGridBody>
        <ResumeRightGridBody>
          <em>Product Manager and UI/UX Designer</em>
        </ResumeRightGridBody>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>{ToolsList(NERPMToolsBullets)}</ResumeLeftGridBody>
        <ResumeRightGridBody>
          {BulletedList(NERPMDescriptionBullets)}
        </ResumeRightGridBody>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>September 2023 - Present</ResumeLeftGridBody>
        <ResumeRightGridBody>
          <em>Software Developer</em>
        </ResumeRightGridBody>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>{ToolsList(NERSWEToolsBullets)}</ResumeLeftGridBody>
        <ResumeRightGridBody>
          {BulletedList(NERSWEDescriptionBullets)}
        </ResumeRightGridBody>
      </ResumeGridRow>

      {/* IT/AV Co-op */}
      <ResumeGridRow>
        <ResumeLeftGridBody>Boston, MA</ResumeLeftGridBody>
        <ResumeCompanyHeading>
          College of Arts, Media and Design (CAMD) at Northeastern University
        </ResumeCompanyHeading>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>July 2023 - December 2023</ResumeLeftGridBody>
        <ResumeRightGridBody>
          <em>IT/Audio Visual Co-op</em>
        </ResumeRightGridBody>
      </ResumeGridRow>

      <ResumeGridRow>
        <ResumeLeftGridBody>{ToolsList(CAMDITToolsBullets)}</ResumeLeftGridBody>
        <ResumeRightGridBody>
          {BulletedList(CAMDITDescriptionBullets)}
        </ResumeRightGridBody>
      </ResumeGridRow>
    </ResumeGridMainContainer>
  );
}
