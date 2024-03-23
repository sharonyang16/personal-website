interface ProgrammingProjectInformation {
  projectName: string;
  startDate: Date;
  endDate?: Date;
  mainLanguages: string[];
  description: string;
  link?: string;
  googleDriveImageID?: string;
  githubLink?: string;
}

// using this as a blank template to copy and paste into the array below
const emptyProject: ProgrammingProjectInformation = {
  projectName: '',
  startDate: new Date(),
  endDate: new Date(),
  mainLanguages: [],
  description: '',
  link: '',
  googleDriveImageID: '',
  githubLink: '',
};

const projects: ProgrammingProjectInformation[] = [
  {
    projectName: 'Personal Website (This website!!)',
    startDate: new Date(),
    mainLanguages: ['TypeScript', 'Gatsby'],
    description:
      'I created this wesite to serve as a centeralized place to find my programming and design work along with information about me. ',
    link: 'https://sharonyang16.github.io/',
    githubLink: 'https://github.com/sharonyang16/sharonyang16.github.io',
  },
  {
    projectName: 'Task Tracker',
    startDate: new Date(),
    mainLanguages: ['Swift', 'SwiftUI'],
    description: '',
  },
  {
    projectName: 'FinishLine',
    startDate: new Date(2023, 8),
    mainLanguages: ['TypeScript', 'React', 'Express'],
    description:
      'FinishLine is a custom PM dashboard created by the software team at NER. I started contributing to the project when I joined the team',
    link: 'https://finishlinebyner.com',
    githubLink: 'https://github.com/Northeastern-Electric-Racing/FinishLine',
  },
  {
    projectName: "Timbers' Nap (3D Platformer)",
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 5),
    mainLanguages: ['Unity3D', 'C#'],
    description: '',
    link: '',
  },
  {
    projectName: 'Vet Finder',
    startDate: new Date(2023, 3),
    endDate: new Date(2023, 3),
    mainLanguages: ['JavaScript', 'React', 'Tailwind CSS'],
    description:
      "This vet finder app was created for and awarded first place at Chewy's 2023 diversity hackathon.",
    githubLink: 'https://github.com/sharonyang16/chewy2023-hackathon',
  },
  {
    projectName: 'Image Processing Application',
    startDate: new Date(2022, 5),
    endDate: new Date(2022, 5),
    mainLanguages: ['Java', 'JavaSwing', 'JUnit'],
    description: '',
    githubLink: 'https://github.com/sharonyang16/image-processing',
  },
  {
    projectName: 'Marble Solitaire Game',
    startDate: new Date(2022, 4),
    endDate: new Date(2022, 4),
    mainLanguages: ['Java', 'JUnit'],
    description: '',
    githubLink: 'https://github.com/sharonyang16/marble-solitaire',
  },
];
