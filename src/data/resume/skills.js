// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Automation', 'Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Swift',
    competency: 3,
    category: ['Application Development', 'Mobile Development', 'Languages'],
  },
  {
    title: 'SwiftUI',
    competency: 3,
    category: ['Application Development', 'Mobile Development', 'Languages'],
  },
  {
    title: 'React.js',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Redux',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bootstrap',
    competency: 3,
    category: ['Web Development', 'Fullstack'],
  },
  {
    title: 'SoapUI',
    competency: 3,
    category: ['Web Development', 'Automation', 'QA', 'Application Development'],
  },
  {
    title: 'REST API',
    competency: 3,
    category: ['Web Development', 'Automation', 'QA', 'Application Development'],
  },
  {
    title: 'Material UI',
    competency: 3,
    category: ['Web Development', 'Fullstack'],
  },
  {
    title: 'Vue.js',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.js',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Nuxt.js',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Automation', 'DevOps', 'Tools', 'Languages'],
  },
  {
    title: 'Powershell',
    competency: 4,
    category: ['Automation', 'DevOps', 'Tools', 'Languages'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Application Development', 'Other'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'D3',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Application Development', 'Mobile Development', 'Automation', 'DevOps', 'Tools'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Automation', 'Application Development', 'Languages', 'Java'],
  },
  {
    title: 'Spring Boot',
    competency: 5,
    category: ['Java'],
  },
  {
    title: 'JUnit',
    competency: 5,
    category: ['Java'],
  },
  {
    title: 'TestNG',
    competency: 5,
    category: ['Java'],
  },
  {
    title: 'Selenium',
    competency: 5,
    category: ['Java', 'Python'],
  },
  {
    title: 'lombok',
    competency: 5,
    category: ['Java'],
  },
  {
    title: 'lodash',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'axios',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'log4j',
    competency: 5,
    category: ['Java'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Automation', 'DevOps', 'Languages', 'Python'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 4,
    category: ['Automation', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Frontend'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Application Development'],
  },
  {
    title: 'UnLocBox',
    competency: 2,
    category: ['Application Development'],
  },
  {
    title: 'Windows',
    competency: 5,
    category: ['Automation', 'DevOps', 'Fullstack'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['DevOps', 'Fullstack', 'Automation'],
  },
  {
    title: 'Jenkins',
    competency: 5,
    category: ['DevOps', 'Fullstack', 'Automation', 'Tools'],
  },
  {
    title: 'Jira API',
    competency: 5,
    category: ['Application Development', 'Automation'],
  },
  {
    title: 'Confluence API',
    competency: 5,
    category: ['Application Development', 'Automation'],
  },
  {
    title: 'JIRA',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'NVIDIA Video SDK',
    competency: 5,
    category: ['Other'],
  },
  {
    title: 'Confluence',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Automation', 'DevOps', 'Fullstack'],
  },
  {
    title: 'MacOs',
    competency: 5,
    category: ['Automation', 'DevOps', 'Fullstack'],
  },
  {
    title: 'Jetbrains tools',
    competency: 5,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
