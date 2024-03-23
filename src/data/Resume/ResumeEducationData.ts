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
