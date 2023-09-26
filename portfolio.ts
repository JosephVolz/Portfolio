import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Joseph Volz',
  title: "Hi, I'm Joseph",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Spring Boot, Laravel, Django, Node.js, Ruby on Rails, Gin and expertise in high-performance computing, big data, algorithms, databases, and distributed systems.",
  resumeLink:
    'https://drive.google.com/file/d/1x5x3xnhlIFatpfP_UTrApgqKtGtSi573/view',
};

export const openSource = {
  githubUserName: 'JosephVolz',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/josephvolz/',
  github: 'https://github.com/JosephVolz',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building Microservices in Spring Boot'),
        emoji('⚡ Building Back End systems in LAMP stack'),
        emoji(
          '⚡ Building responsive SPA & PWA in React.js & Angular.js & Vue.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Java',
          fontAwesomeClassName: 'logos:java',
        },
        {
          skillName: 'Spring Boot',
          fontAwesomeClassName: 'simple-icons:springboot',
        },
        {
          skillName: 'PHP',
          fontAwesomeClassName: 'skill-icons:php-dark',
        },
        {
          skillName: 'Laravel',
          fontAwesomeClassName: 'logos:laravel',
        },
        {
          skillName: 'Symfony',
          fontAwesomeClassName: 'logos:symfony',
        },
        {
          skillName: 'Typescript',
          fontAwesomeClassName: 'skill-icons:typescript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Angularjs',
          fontAwesomeClassName: 'vscode-icons:file-type-angular',
        },
        {
          skillName: 'Vuejs',
          fontAwesomeClassName: 'vscode-icons:file-type-vue',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Expressjs',
          fontAwesomeClassName: 'skill-icons:expressjs-dark',
        },
        {
          skillName: 'Ruby',
          fontAwesomeClassName: 'logos:ruby',
        },
        {
          skillName: 'Ruby on Rails',
          fontAwesomeClassName: 'logos:rails',
        },
        {
          skillName: 'Go',
          fontAwesomeClassName: 'logos:go',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'Kubernetes',
          fontAwesomeClassName: 'logos:kubernetes',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Apache',
          fontAwesomeClassName: 'logos:apache',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'AI & ML',
      lottieAnimationFile: '/lottie/skills/ml.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience in developing Face Login System using PyTorch'),
        emoji('⚡ Building Expert Systems with MA'),
        emoji('⚡ Experience of using Tensorflow CNN recognizing objects'),
        emoji('⚡ Experience of developing speech recognition'),
      ],
      softwareSkills: [
        {
          skillName: 'PyTorch',
          fontAwesomeClassName: 'logos:pytorch-icon',
        },
        {
          skillName: 'Tensorflow',
          fontAwesomeClassName: 'logos:tensorflow',
        },
        {
          skillName: 'Pattern Recognition',
          fontAwesomeClassName: 'icon-park:lattice-pattern',
        },
        {
          skillName: 'Expert System',
          fontAwesomeClassName: 'eos-icons:system-ok',
        },
        {
          skillName: 'Natural Language Processing',
          fontAwesomeClassName: 'fa:language',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend', //Insert stack or technology you have experience in
    progressPercentage: '100', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend/Architecture', //Insert stack or technology you have experience in
    progressPercentage: '100', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Amazon Web Service',
    progressPercentage: '100',
  },
  {
    Stack: 'Google Cloud Platform',
    progressPercentage: '90',
  },
  {
    Stack: 'Automated Testing, Mocha, Chai',
    progressPercentage: '90',
  },
  {
    Stack: 'Debugging',
    progressPercentage: '90',
  },
  {
    Stack: 'Deep Learning',
    progressPercentage: '100',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Universidade de Aveiro',
    subHeader: 'Bechelor of Technology, Computer Engineering',
    duration: 'May 2013 - December 2017',
    grade: 'Grade A',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Engineer',
    company: 'Fortunes Tech',
    companyLogo: '/img/icons/common/fortunes-tech.jpeg',
    date: 'May 2023 – Present',
    descBullets: [
      'Developed new charts and features and improved architecture and performance. Wrote unit  and e2e tests. Used React, D3, Styled Components, and Cypress.',
      'Handled the complete architecture and development of the UI and connected it to the API. Added unit and e2e tests. Used TypeScript, React, D3, and Chakra UI',
      'Contributed to UI architecture and moved the existing UI to Chakra UI. Built design system and custom components. Used TypeScript, React, Chakra UI, emotion, and animation.',
      'Contributed to the material design UI and developed custom components. Added tests. Used TypeScript, React, and Material UI.',
    ],
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Rocksauce',
    companyLogo: '/img/icons/common/rocksauce.jpeg',
    date: 'Jun 2020 – Apr 2023',
    descBullets: [
      'Implemented the back-end of a Java RESTful API of Knod a review sharing/social networking app (http://staging.knod.com) with unit tests, integration tests, CD, CI with DynamoDB, and MySQL as data storage.',
      'Deployed on AWS stack with auto-scaling, load-balancing, with continuous integration Jenkins, and CloudWatch monitoring.',
      'Implemented a search feature with Elasticsearch using customized scoring and sorting functions.',
      'Implemented the admin interface of the TalkIT app using AngularJS.',
      'Helped with the development of other apps using Golang, Java, and Spring.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Growin',
    companyLogo: '/img/icons/common/growin.jpeg',
    date: 'Feb 2018 - Jun 2020',
    descBullets: [
      'Specialized in middle-tier applications for the web—implementing patterns like MVC, ORM, and OOP with the goal of making applications more robust, scalable, and easier to maintain.',
      'Contributed to open-source PHP projects: CakePHP and Zend Framework.',
      'Developed multiple web applications using the Zend Framework and CakePHP frameworks.',
      'Applications include community-lead, lead-generation, affiliate systems, CMS/CRM, and internal employee dashboards which helped synergize various company projects.',
      'Designed and was responsible for maintaining sites generating $1 million+ in gross revenue yearly and 200,000 monthly page views.',
      'Designed and optimized large-scale MySQL databases using advanced techniques like stored procedures, triggers, and complex queries.',
      'Built internal SEO tools necessary to track and exploit a highly competitive landscape.',
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/JosephVolz/Portfolio',
    link: 'https://josephvolz.netlify.app',
  },
  {
    name: 'LastObject',
    desc: "LastObject creates the world's first reuable alternatives to single-use products. Check out our zero waste store for more sustainable shopping.",
    link: 'https://github.com/JosephVolz/e-commerce-react.js',
  },
  {
    name: 'Drone Blocks',
    desc: `Well, droneblocks.io was a quite interesting project I have done. The site is about teaching kids copmuter science with Tello drones. Kids can actually develop a program that controls Tello drones using drag and drop editor. My main task was to implement that drag and drop editor. We implemented the editor using Google's blockly library. The job involed customizing the editor for Drones and finally turning the generated code blocks into something that Tello drone can understand. You can check how it works from here.  https://dev.droneblocks.io/ It was quite interesting and challening project. The most challening part was exception handling. And also there were some problems with Blockly library itself, so we had to deal with that as well.`,
    link: 'https://droneblocks.io/',
  },
  {
    name: 'Drive Flux',
    desc: `The website is about lending cars and motorcycles in Malaysia. The basic idea behind the website was "No need to buy a car when you can subscribe it". I have started working on this project in 2018. The client came with this basic idea, and I have made it into reality. The designs were provided by the client, and I did the rest from database design, development, and deployment to AWS. We used Node, React and mongodb as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration. I have developed the MVP in 6 months and now People in Malaysia are actively using these services.`,
    link: 'https://driveflux.com/',
  },
  {
    name: 'Is Luxury',
    desc: `LUXURY Estate Management, a division of IS LUXURY, is a full-service home management company specializing in the maintenance management of private luxury residences in premier luxury Las Vegas Valley communities. Their goal is to provide exceptional service to our property owners while maintaining a high standard of professionalism and integrity. I have developed the MVP in 5 months and now People are actively using these services.`,
    link: 'https://www.isluxury.com/',
  },
  {
    name: 'Lyft',
    desc: `The website is about booking car for personal or business purpose. Any people can book a suitable car and any drivers also apply for any cars. The company just offers cars. Then, drivers and riders are free people. We used Node, React, Next.js and mongodb as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration.`,
    link: 'https://www.lyft.com/',
  },
  {
    name: 'Vrbo',
    desc: `Vrbo is a global vacation rental community with more than 2 million unique properties that seeks to connect people with the people and places they love. My main task was to develop a adding property. People could not only book a house, but also advertise their properties. I used Node, React and mongodb as a tech stack and integrated third party services like Stripe for payment and Mailjet for mail integration`,
    link: 'https://www.vrbo.com/',
  },
  {
    name: 'MGM Resorts',
    desc: `MGM Resorts International (NYSE: MGM) is an S&P 500® global gaming and entertainment company with national and international locations featuring best-in-class hotels and casinos, state-of-the-art meetings and conference spaces, incredible live and theatrical entertainment experiences, and an extensive array of restaurant, nightlife and retail offerings. I developed Casino feature with 8 months using several tech stacks and third party integrations.`,
    link: 'https://www.mgmresorts.com/',
  },
  {
    name: 'Gopuff Food Delivery',
    desc: `This website is about booking food delivery. I used Node, Lodash and mongodb as a tech stack and integrated third party services like Stripe for payment integration. I have developed the MVP in 5 months and now People are actively using these services.`,
    link: 'https://www.gopuff.com/',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Kristian Pitzner',
    feedback:
      'I know this goal wasn’t easy. How you managed to set it and systematically work towards it until you achieved it truly speaks to your intelligence, tenacity, and perseverance. I’m lucky to have you on my team.',
  },
  {
    name: 'Patrick Louis',
    feedback:
      'I’m so impressed by your dedication to learning. I know it wasn’t easy when that technology solution you presented didn’t work out. I’m amazed that you managed to distill feedback from all those stakeholders and find a new, viable solution that everyone loves.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Joseph Volz',
  description: 'A passionate Full Stack Web Developer and AI/ML Developer.',
  author: 'Joseph Volz',
  image:
    'https://avatars.githubusercontent.com/u/137592209?s=400&u=de6343e51aae5b7bb83bcf0fcb8d0e6b4ea31d27&v=4',
  url: 'https://josephvolz.netlify.app/',
  keywords: [
    'Joseph',
    'Joseph Volz',
    '@joseph',
    'joseph',
    'Portfolio',
    'Joseph Portfolio ',
    'Joseph Volz Portfolio',
  ],
};
