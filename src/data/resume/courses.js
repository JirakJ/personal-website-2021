const courses = [
  {
    title: 'Advanced Selenium testing framework with Java',
    number: 'UC-4952c307-4f04-4726-a563-0c59a4f9c405',
    link: 'https://www.udemy.com/certificate/UC-4952c307-4f04-4726-a563-0c59a4f9c405/',
    university: 'Udemy',
    category: ['Automation'],
  },
  {
    title: 'Nuxt.js - Vue.js on Steroids',
    number: 'Credential ID UC-9eec60de-2cd7-450e-91b0-b434785c91db',
    link: 'https://www.udemy.com/certificate/UC-9eec60de-2cd7-450e-91b0-b434785c91db/',
    university: 'Udemy',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'The Complete React Js & Redux Course - Build Modern Web Apps',
    number: 'Credential ID UC-c261dd8c-fd9f-45af-a311-acf2f0a34091',
    link: 'https://www.udemy.com/certificate/UC-c261dd8c-fd9f-45af-a311-acf2f0a34091/',
    university: 'Udemy',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Java Multithreading, Concurrency & Performance Optimization',
    number: 'Credential ID UC-c9163eda-7e3a-4359-ac71-e9b7dd1954b2',
    link: 'https://www.udemy.com/certificate/UC-c9163eda-7e3a-4359-ac71-e9b7dd1954b2/',
    university: 'Udemy',
    category: ['Application Development', 'BE', 'Fullstack'],
  },
  {
    title: 'Design Patterns in iOS Using Swift',
    number: 'Credential ID UC-265493dc-6054-4c24-8e91-3d63c2987b95',
    link: 'https://www.udemy.com/certificate/UC-265493dc-6054-4c24-8e91-3d63c2987b95/',
    university: 'Udemy',
    category: ['Mobile development', 'Fullstack'],
  },
  {
    title: 'SwiftUI - Declarative Interfaces for any Apple Device',
    number: 'Credential ID UC-PSJB8YPT',
    link: 'https://www.udemy.com/certificate/UC-PSJB8YPT/',
    university: 'Udemy',
    category: ['Mobile development', 'Fullstack'],
  },
  {
    title: 'SwiftUI - Learn How to Build Beautiful, Robust, Apps',
    number: 'Credential ID UC-P6GXX6HU',
    link: 'https://www.udemy.com/certificate/UC-P6GXX6HU/',
    university: 'Udemy',
    category: ['Mobile development', 'Fullstack'],
  },
  {
    title: 'iOS 13 - How to Make Amazing iPhone Apps: Xcode 11 & Swift 5',
    number: 'Credential ID UC-E0PZHPRO',
    link: 'https://www.udemy.com/certificate/UC-E0PZHPRO/',
    university: 'Udemy',
    category: ['Mobile development', 'Fullstack'],
  },
  {
    title: 'Become Digital Marketing PRO in NO TIME - 12 Courses in 1',
    number: 'Credential ID UC-GVSB8WM9',
    link: 'https://www.udemy.com/certificate/UC-GVSB8WM9/',
    university: 'Udemy',
    category: ['Other'],
  },
  {
    title: 'Docker Essentials',
    number: 'Credential ID UC-VD647JA3',
    link: 'https://www.udemy.com/certificate/UC-VD647JA3/',
    university: 'Udemy',
    category: ['DevOps', 'Fullstack'],
  },
  {
    title: 'Full JavaScript Masterclass Course: ES6 Modern Development',
    number: 'Credential ID UC-K0BOHA1S',
    link: 'https://www.udemy.com/certificate/UC-K0BOHA1S/',
    university: 'Udemy',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'MongoDB - The Complete Developers Guide',
    number: 'Credential ID UC-F9KFRIW7',
    link: 'https://www.udemy.com/certificate/UC-F9KFRIW7',
    university: 'Udemy',
    category: ['BE', 'DevOps', 'Fullstack'],
  },
  {
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    number: 'Credential ID UC-DFA47CIE',
    link: 'https://www.udemy.com/certificate/UC-DFA47CIE/',
    university: 'Udemy',
    category: ['Other'],
  },
  {
    title: 'The Complete Python 3 Course: Beginner to Advanced!',
    number: 'Credential ID UC-I16B1DZV',
    link: 'https://www.udemy.com/certificate/UC-I16B1DZV/',
    university: 'Udemy',
    category: ['Automation', 'Application development', 'Fullstack'],
  },
  {
    title: 'WebServices/ REST API Testing Automation: via SoapUI',
    number: 'Credential ID UC-SG84CVPY',
    link: 'https://www.udemy.com/certificate/UC-SG84CVPY/',
    university: 'Udemy',
    category: ['Automation', 'BE', 'QA', 'Fullstack'],
  },
  {
    title: 'MongoDB for Beginners',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/eae03c21/',
    university: 'Zenva',
    category: ['DevOps', 'BE', 'Fullstack'],
  },
  {
    title: 'Bootstrap 4 from scratch with 7 projects, master bootstrap 4',
    number: 'Credential ID UC-OINUN411',
    link: 'https://www.udemy.com/certificate/UC-OINUN411/',
    university: 'Udemy',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Complete OpenCV Beginners Course using Python 2018',
    number: 'Credential ID UC-ROX9DO2U',
    link: 'https://www.udemy.com/certificate/UC-ROX9DO2U/',
    university: 'Udemy',
    category: ['Application development', 'Other'],
  },
  {
    title: 'Complete Python programming Basics to Advance level',
    number: 'Credential ID UC-398BJ5UE',
    link: 'https://www.udemy.com/certificate/UC-398BJ5UE/',
    university: 'Udemy',
    category: ['Automation', 'DevOps', 'Fullstack'],
  },
  {
    title: 'Design Patterns with C++',
    number: 'Credential ID UC-SLFWMS0U',
    link: 'https://www.udemy.com/certificate/UC-SLFWMS0U/',
    university: 'Udemy',
    category: ['Application development', 'Fullstack'],
  },
  {
    title: 'GIT - Master GIT Version Control System',
    number: 'Credential ID UC-9CZIWMD7',
    link: 'https://www.udemy.com/certificate/UC-9CZIWMD7/',
    university: 'Udemy',
    category: ['Other', 'Fullstack', 'Automation', 'BE', 'Frontend', 'DevOps'],
  },
  {
    title: 'Intro to Next.js',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/bf5efaa7/',
    university: 'Zenva',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Learn and Understand C++',
    number: 'Credential ID UC-ENG1PI78',
    link: 'https://www.udemy.com/certificate/UC-ENG1PI78/',
    university: 'Udemy',
    category: ['Application development', 'Fullstack'],
  },
  {
    title: 'Make video game in unity3D',
    number: 'Credential ID UC-SWGH7JAN',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-SWGH7JAN.pdf',
    university: 'Udemy',
    category: ['Other'],
  },
  {
    title: 'Master Python language - MySQL connector',
    number: 'Credential ID UC-MQUP597D',
    link: 'https://www.udemy.com/certificate/UC-MQUP597D/',
    university: 'Udemy',
    category: ['Application development', 'Other'],
  },
  {
    title: 'Python 1200: Practice for Beginners',
    number: 'Credential ID UC-F09F7I32',
    link: 'https://www.udemy.com/certificate/UC-F09F7I32/',
    university: 'Udemy',
    category: ['Application development', 'Fullstack', 'Automation'],
  },
  {
    title: 'Python: Everything you need to know to become a developer',
    number: 'Credential ID UC-RS3DP401',
    link: 'https://www.udemy.com/certificate/UC-RS3DP401/',
    university: 'Udemy',
    category: ['Application development', 'Fullstack', 'Automation'],
  },
  {
    title: 'Responsive Admin Pages with Semantic UI',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/e1310ef0/',
    university: 'Zenva',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Scrum for Beginners',
    number: 'Credential ID UC-RZ8FWKY4',
    link: 'https://www.udemy.com/certificate/UC-RZ8FWKY4/',
    university: 'Udemy',
    category: ['Other'],
  },
  {
    title: 'Selenium WebDriver Masterclass: Novice to Ninja',
    number: 'Credential ID UC-GJPTXO7P',
    link: 'https://www.udemy.com/certificate/UC-GJPTXO7P/',
    university: 'Udemy',
    category: ['Automation', 'QA'],
  },
  {
    title: 'Short and Sweet: Get Started with Git and Github Right Now',
    number: 'Credential ID UC-RORTVY1R',
    link: 'https://www.udemy.com/certificate/UC-RORTVY1R/',
    university: 'Udemy',
    category: ['Other', 'Fullstack', 'Application Development'],
  },
  {
    title: 'Understanding Docker and using it for Selenium automation',
    number: 'Credential ID UC-CTXXU73T',
    link: 'https://www.udemy.com/certificate/UC-CTXXU73T/',
    university: 'Udemy',
    category: ['Automation', 'Fullstack', 'Automation'],
  },
  {
    title: 'Web Scraping in Python with BeautifulSoup & Scrapy Framework',
    number: 'Credential ID UC-NC9ZXHW4',
    link: 'https://www.udemy.com/certificate/UC-NC9ZXHW4/',
    university: 'Udemy',
    category: ['Automation', 'Fullstack', 'Other'],
  },
  {
    title: 'Bite-Sized CSS',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/dc75b81d/',
    university: 'Zenva',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Bite-Sized HTML',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/17f7c4c4/',
    university: 'Zenva',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Bite-Sized HTML5 Game Development',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/a29793ab/',
    university: 'Zenva',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Bite-Sized JavaScript',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/9db6f3d3/',
    university: 'Zenva',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Bite-Sized jQuery',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/082f6dd2/',
    university: 'Zenva',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Build Web Applications with React',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/45fc34cc/',
    university: 'Zenva',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Git and Github - Version Control and Collaboration',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/5ad375e9/',
    university: 'Zenva',
    category: ['Other', 'Fullstack'],
  },
  {
    title: 'Intro to Bootstrap',
    number: 'Credential ID 5cc4c61715d49',
    link: 'https://academy.zenva.com/certificate/93141c53/',
    university: 'Zenva',
    category: ['Frontend', 'Fullstack'],
  },
  {
    title: 'Complete Digital Marketing Course to Become Professional',
    number: 'Credential ID UC-ANFB8JPM',
    link: 'https://www.udemy.com/certificate/UC-ANFB8JPM/',
    university: 'Udemy',
    category: ['Other'],
  },
  {
    title: 'Modern Network Technologies',
    number: 'MMOS',
    link: 'https://www.vutbr.cz/studis/student.phtml?gm=gm_detail_predmetu&apid=171109',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Information System Security',
    number: 'MBIS',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=171020',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Advanced Data Transmission Technology',
    number: 'MVDP',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=171237',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Electrical Installations',
    number: 'MEIC',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=171043',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Rhetoric',
    number: 'MRET',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=171192',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Enlish for Life',
    number: 'MEFE',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=171040',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Accesses and Transports Networks',
    number: 'BPTS',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=148765',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Security systems',
    number: 'BZSY',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=148813',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Foundations of Cryptography',
    number: 'BZKR',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=148811',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Fundamentals of TV Technology',
    number: 'BZTV',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=148814',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Network Operating systems',
    number: 'BSOS',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=148782',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Object oriented programming',
    number: 'BOOP',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=148733',
    university: 'Brno University of Technology',
    category: ['Other', 'Application Development'],
  },
  {
    title: 'Programming .NET and C#',
    number: 'XMW5',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=150266',
    university: 'Brno University of Technology',
    category: ['Other', 'Application Development'],
  },
  {
    title: 'Analog technology',
    number: 'BANA',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133285',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Signals and systems analysis',
    number: 'BASS',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133301',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Communication technology',
    number: 'BKOM',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133305',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Multimedia Services',
    number: 'BMDS',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133284',
    university: 'Brno University of Technology',
    category: ['Other', 'Application Development'],
  },
  {
    title: 'Electromagnetic Compatibility',
    number: 'BEMC',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133266',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Introduction to Computer Typography and Graphics',
    number: 'BZSG',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133302',
    university: 'Brno University of Technology',
    category: ['Other', 'Application Development'],
  },
  {
    title: 'Management minimun',
    number: 'XPOM',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133781',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Network architecture',
    number: 'BARS',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133294',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Data Communication',
    number: 'BDAK',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133289',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Digital circuits and microprocessors',
    number: 'BDOM',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133248',
    university: 'Brno University of Technology',
    category: ['Other', 'Application Development'],
  },
  {
    title: 'Practical exercises in information networks',
    number: 'BPIS',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133283',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Electroacoustics',
    number: 'BELA',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133288',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Radio and Mobile Communication',
    number: 'BRMK',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=133255',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Professional Success',
    number: 'XEPO',
    link: 'https://www.vutbr.cz/studis/student.phtml?sn=predmet_detail&apid=120351',
    university: 'Brno University of Technology',
    category: ['Other'],
  },
  {
    title: 'Modern React with Redux',
    number: 'Modern React with Redux',
    link: 'https://www.udemy.com/certificate/UC-724f090f-73fc-4689-8a27-cd5b2b138171/',
    university: 'Udemy',
    category: ['Frontend', 'Fullstack'],
  },
].map((course) => ({ ...course, category: course.category.sort() }));

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
  ...new Set(courses.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, courses };
