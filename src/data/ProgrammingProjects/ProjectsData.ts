export interface ProgrammingProjectInformation {
  projectName: string;
  startDate: Date;
  endDate?: Date;
  mainTools: string[];
  description: string;
  link?: string;
  googleDriveImageID?: string;
  githubLink?: string;
}

export const projects: ProgrammingProjectInformation[] = [
  {
    projectName: 'Personal Website (This website!)',
    startDate: new Date(2023, 7),
    mainTools: ['TypeScript', 'Gatsby'],
    description:
      "I created this wesite to have a centeralized place to find my programming and design work and information about me. I've been working on this site on and off since 2023, completely restarting a couple of times as I wasn't happy with the overall layout and/or project structure.",
    link: 'https://sharonyang16.github.io/',
    githubLink: 'https://github.com/sharonyang16/sharonyang16.github.io',
  },
  {
    projectName: 'Task Tracker',
    startDate: new Date(2024, 2),
    mainTools: ['Swift', 'SwiftUI'],
    description:
      "I began creating a task tracker app as a way to learn Swift/SwiftUI. It is currently still in a rough state, but I plan to work on a more once I have more spare time. I've had the idea for an app like this since 2022 because I love creating to-do lists to help me organize and complete tasks.",
  },
  {
    projectName: 'FinishLine',
    startDate: new Date(2023, 8),
    mainTools: ['TypeScript', 'React', 'Express'],
    description:
      'FinishLine is a custom PM dashboard created by the software team at NER. I started contributing to the project when I joined the team in Fall of 2023 and plan to continue contributing to it until I graduate from Northeastern.',
    link: 'https://finishlinebyner.com',
    googleDriveImageID: '1ozPKW48iiutHvwdqTgSxgZT3jMzVfxGn',
    githubLink: 'https://github.com/Northeastern-Electric-Racing/FinishLine',
  },
  {
    projectName: "Timbers' Nap (3D Platformer)",
    startDate: new Date(2023, 4),
    endDate: new Date(2023, 5),
    mainTools: ['Unity3D', 'C#'],
    description:
      "Timbers' Nap is a 3D Platformer created for CS3540: Game Programming at Northeastern University. Working with 3 classmates, we developed this game in a 7 week period during summer of 2023.",
    link: 'https://play.unity.com/mg/other/webgl-builds-349008',
    googleDriveImageID: '1tbndE_QbFpzIoLXMWj-50GTdMgsZLfXh',
  },
  {
    projectName: 'Vet Finder',
    startDate: new Date(2023, 3),
    endDate: new Date(2023, 3),
    mainTools: ['JavaScript', 'React', 'Tailwind CSS'],
    description:
      "This vet finder app was created for and awarded first place at Chewy's 2023 diversity hackathon. This app was created in ~24 hours with 3 teammates.",
    githubLink: 'https://github.com/sharonyang16/chewy2023-hackathon',
  },
  {
    projectName: 'Image Processing Application',
    startDate: new Date(2022, 5),
    endDate: new Date(2022, 5),
    mainTools: ['Java', 'JavaSwing', 'JUnit'],
    description:
      'This image processing app was created for CS3500: Object-Oriented Design at Northeastern University. Utilizing pair programming, a peer and I developed a GUI for this app using the MVC design pattern along with creating documentation and tests.',
    googleDriveImageID: '1tSsiobTV-H4GlnhOWxkfcsGZ3G26iO6J',
    githubLink: 'https://github.com/sharonyang16/image-processing',
  },
  {
    projectName: 'Marble Solitaire Game',
    startDate: new Date(2022, 4),
    endDate: new Date(2022, 4),
    mainTools: ['Java', 'JUnit'],
    description:
      'This marble solitare game was created for CS3500: Object-Oriented Design at Northeastern University. I implemented this marble solitare game using the MVC design pattern. The final game has 3 different shaped boards for users to choose and play with.',
    githubLink: 'https://github.com/sharonyang16/marble-solitaire',
  },
];
