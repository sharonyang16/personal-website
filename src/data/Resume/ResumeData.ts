/**
 * Education Data
 */
interface EducationInformation {
  name: string;
  location: string;
  major: string;
  startDate: Date;
  endDate: Date;
  gpa: number;
  courses: string[];
}

export const education: EducationInformation = {
  name: 'Northeastern University',
  location: 'Boston, MA',
  major: 'B.S. Computer Science and Design',
  startDate: new Date(2021, 8),
  endDate: new Date(2026, 4),
  gpa: 3.86,
  courses: [
    'Human Computer Interaction',
    'Object-Oriented Design',
    'Algorithms and Data',
    'Networks and Distributed Systems',
    'Experience and Interaction ',
    'Design: Processes + Practices',
    'Typographic Systems',
    'Computer Systems',
    'Game Programming',
    'Mathematics of Data Models',
    'Theory of Computation',
    'Linear Algebra',
  ],
};

/**
 * Skills Data
 */
interface SkillInformation {
  category: string;
  tools: string[];
}

export const skills: SkillInformation[] = [
  {
    category: 'Programming Languages',
    tools: [
      'JavaScript/TypeScript',
      'HTML/CSS',
      'Java',
      ' Python',
      'C#',
      'C/C++',
      'SQL',
    ],
  },
  {
    category: 'Frameworks/Libraries',
    tools: [
      'React',
      'Material UI',
      'Express',
      'Node.js',
      'JUnit',
      'Next.js',
      'Gatsby',
    ],
  },
  {
    category: 'Applications/Tools',
    tools: [
      'Git',
      'GitHub',
      'Figma',
      'Illustrator',
      'InDesign',
      'Photoshop',
      'Unity',
    ],
  },
];

/**
 * Experiences Data
 */
interface RoleInformation {
  title: string;
  startDate: Date;
  endDate?: Date;
  toolsAndSkills: string[];
  descriptionBullets: string[];
}
interface OrganizationInformation {
  organization: string;
  location: string;
  roles: RoleInformation[];
}

export const experiences: OrganizationInformation[] = [
  {
    organization: 'Northeastern Electric Racing (NER)',
    location: 'Boston, MA',
    roles: [
      {
        title: 'Product Manager and UI/UX Designer',
        startDate: new Date(2023, 11),
        toolsAndSkills: ['Figma', 'UI/UX Design', 'Product Management'],
        descriptionBullets: [
          "Lead the redesign of the landing page for NER's data visualization dashboard, Argos, communicating with engineers to determine the desired data to be displayed pertaining to the car during competition.",
          "Created high fidelity wireframes for the home page of NER's project management dashboard, FinishLine, that focuses on engaging and informing those not associated with the organization along with UI related to a feature that allows admins of the application to edit the content displayed on that home screen.",
        ],
      },
      {
        title: 'Software Developer',
        startDate: new Date(2023, 8),
        toolsAndSkills: [
          'TypeScript',
          'React',
          'Express',
          'HTML/CSS',
          'Material UI',
          'Prisma',
          'Jest',
          'PostgreSQL',
        ],
        descriptionBullets: [
          'Resolved tickets pertaining to FinishLine in order to improve user experience and increase productivity for sub-teams within the organization, consisting of over 200 members.',
          'Created Pull Requests to address bugs, enhancements, and new features on the frontend, endpoints for new features on the backend, and migrating a section of the database to support the renaming of a state.',
        ],
      },
    ],
  },
  {
    organization:
      'College of Arts, Media and Design (CAMD) at Northeastern University',
    location: 'Boston, MA',
    roles: [
      {
        title: 'IT/Audio Visual Co-op',
        startDate: new Date(2023, 6),
        endDate: new Date(2023, 11),
        toolsAndSkills: [
          'ServiceNow',
          'Snipe-IT',
          'macOS',
          'Windows',
          'Troubleshooting',
        ],
        descriptionBullets: [
          'Created and updated tickets in ServiceNow, documenting issues, troubleshooting steps, and solutions with clarity and detail to better team communication and optimize time taken to reach problem resolution.',
          "Supported the setup, troubleshooting, and maintenance of the college's equipment, consisting of desktop computers and displays in 7 computer labs, printers and plotters in 2 print rooms, and various laptops used by faculty and staff, and maintained the accuracy of the department’s inventory through Snipe-IT.",
          'Addressed questions and concerns from CAMD students, faculty, and staff regarding equipment and software managed by the department and other technologies managed at a university level.',
        ],
      },
    ],
  },
];
