export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  category: 'web' | 'iot' | 'ai' | 'embedded';
}

export interface Honour {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  type: 'award' | 'certification' | 'recognition';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 'ptms',
    title: 'Public Transportation Management System',
    description: 'IoT-based public transportation automation ',
    longDescription: 'A comprehensive smart home automation system built with Arduino, Raspberry Pi, and React Native. Features include voice-controlled lighting, temperature monitoring, security system integration, and real-time notifications. The system uses MQTT protocol for device communication and includes a beautiful mobile dashboard.',
    technologies: ['Arduino', 'Raspberry Pi', 'React Native', 'MQTT', 'Firebase', 'Node.js'],
    githubUrl: 'https://github.com/username/smart-home',
    liveUrl: 'https://smart-home-demo.vercel.app',
    imageUrl: 'https://penncapital-star.com/wp-content/uploads/2022/03/SEPTA-BUS.jpg',
    featured: true,
    category: 'iot'
  },
  {
    id: 'eduCare',
    title: 'EduCare',
    description: 'Deep learning powered image classification with real-time processing',
    longDescription: 'An advanced image classification platform using TensorFlow and React. The system can classify images into multiple categories with high accuracy, provides real-time processing capabilities, and includes a user-friendly web interface for uploading and analyzing images. Features include batch processing, API integration, and detailed analytics.',
    technologies: ['TensorFlow', 'Python', 'React', 'FastAPI', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/ai-classifier',
    liveUrl: 'https://ai-classifier-demo.vercel.app',
    imageUrl: 'https://www.statnews.com/wp-content/uploads/2019/08/AdobeStock_34800743-645x645.jpeg',
    featured: true,
    category: 'ai'
  },
  {
    id: 'thrive',
    title: 'Thrive - an app to promote gender equality',
    description: 'A hackathon project built to promote gender equality especially in the context of nepal via empowerment, anonymous harrassment reporting and awareness.',
    longDescription: 'A hackathon project built to promote gender equality especially in the context of nepal via empowerment, anonymous harrassment reporting and awareness.This project was built hackathon organized by Code For Change, Kathmandu',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', "Express.js"],
    githubUrl: 'https://github.com/username/weather-station',
    imageUrl: 'https://img.freepik.com/premium-vector/hand-drawn-gender-equality-icon_23-2151494899.jpg',
    featured: true,
    category: 'web'
  },
  // {
  //   id: 'portfolio-website',
  //   title: 'Developer Portfolio Website',
  //   description: 'Modern portfolio website built with React and Framer Motion',
  //   longDescription: 'A stunning portfolio website showcasing projects, skills, and experience. Built with React, TypeScript, and Framer Motion for smooth animations. Features include responsive design, dark/light theme, project showcase, contact forms, and SEO optimization. Deployed on Vercel with custom domain.',
  //   technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
  //   githubUrl: 'https://github.com/username/portfolio',
  //   liveUrl: 'https://developer-portfolio.vercel.app',
  //   imageUrl: '/api/placeholder/600/400',
  //   featured: true,
  //   category: 'web'
  // },
  // {
  //   id: 'robot-arm-controller',
  //   title: 'Robotic Arm Controller',
  //   description: '6-DOF robotic arm with computer vision integration',
  //   longDescription: 'A sophisticated 6-degree-of-freedom robotic arm controller with computer vision capabilities. The system can perform pick-and-place operations, object tracking, and precise movements. Built with Arduino, servo motors, and OpenCV for vision processing. Includes a GUI for manual control and automated task programming.',
  //   technologies: ['Arduino', 'OpenCV', 'Python', 'Servo Motors', 'Computer Vision', 'Qt'],
  //   githubUrl: 'https://github.com/username/robot-arm',
  //   imageUrl: '/api/placeholder/600/400',
  //   featured: false,
  //   category: 'embedded'
  // },
  // {
  //   id: 'chatbot-assistant',
  //   title: 'AI-Powered Chatbot Assistant',
  //   description: 'Intelligent chatbot with natural language processing capabilities',
  //   longDescription: 'An advanced AI chatbot assistant built with natural language processing capabilities. Uses machine learning models to understand user intent, provide intelligent responses, and learn from conversations. Features include multi-language support, sentiment analysis, and integration with various APIs for enhanced functionality.',
  //   technologies: ['Python', 'NLTK', 'TensorFlow', 'Flask', 'React', 'WebSocket'],
  //   githubUrl: 'https://github.com/username/chatbot',
  //   liveUrl: 'https://chatbot-assistant.vercel.app',
  //   imageUrl: '/api/placeholder/600/400',
  //   featured: false,
  //   category: 'ai'
  // }
];

export const honours: Honour[] = [
 {
  id: 'winner-trinity-intra-a-levels-hackathon',
  title: 'Winner of Trinity Intra-College A-Levels Hackathon',
  organization: 'Trinity International College',
  year: '2024',
  description: 'Recognized for developing an innovative IoT solution for public transportation.',
  type: 'award'
},
{
  id: 'winner-trinity-it-competition',
  title: 'Winner of Trinity IT Competition 2025',
  organization: 'Trinity SciTech Expo',
  year: '2025',
  description: 'Recognized for developing an innovative emergency medical system for students.',
  type: 'award'
},
{
  id: 'participated-in-29th-set-exhibition',
  title: 'Participant in 29th SET Expo 2025',
  organization: "St. Xavier's College, Maitighar",
  year: '2025',
  description: 'Exhibited our project EduCare at the SET Exhibition, a national-level event in Nepal, where judges were impressed by our project.',
  type: 'certification'
},
{
  id: 'participated-in-math-mania-2024',
  title: 'Participant in Math Mania – A-Levels Showdown',
  organization: "St. Xavier's College",
  year: '2024',
  description: 'Selected as one of only six students from our college to participate in this mathematics competition.',
  type: 'certification'
},

  // {
  //   id: 'winner-trinity-it-competition',
  //   title: 'Winner of Trinity IT Competition 2025',
  //   organization: 'Trinity Scitech Expo',
  //   year: '2025',
  //   description: 'Recognized for developing an innovative emmergency medical system for students',
  //   type: 'award'
  // },
  // {
  //   id: 'hackathon-winner',
  //   title: 'First Place - AI Hackathon',
  //   organization: 'DevCon 2022',
  //   year: '2022',
  //   description: 'Won first place in 48-hour AI/ML hackathon with team of 4 developers',
  //   type: 'award'
  // },
  // {
  //   id: 'academic-excellence',
  //   title: 'Academic Excellence Award',
  //   organization: 'University of Technology',
  //   year: '2022',
  //   description: 'Awarded for maintaining GPA above 3.8 throughout the academic year',
  //   type: 'recognition'
  // },
  // {
  //   id: 'iot-certification',
  //   title: 'IoT Specialist Certification',
  //   organization: 'Cisco Networking Academy',
  //   year: '2021',
  //   description: 'Completed comprehensive IoT specialist certification program',
  //   type: 'certification'
  // },
  // {
  //   id: 'open-source-contributor',
  //   title: 'Open Source Contributor Recognition',
  //   organization: 'GitHub',
  //   year: '2021',
  //   description: 'Recognized for significant contributions to open-source projects in IoT and embedded systems',
  //   type: 'recognition'
  // }
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/gobinda-prasad-paudel', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gobinda-prasad-paudel-aa9485218/', icon: 'Linkedin' },
  // { name: 'Twitter', url: 'https://twitter.com/username', icon: 'Twitter' },
  // { name: 'Email', url: 'mailto:hello@example.com', icon: 'Mail' },
  // { name: 'Discord', url: 'https://discord.gg/username', icon: 'MessageCircle' },
  // { name: 'YouTube', url: 'https://youtube.com/@username', icon: 'Youtube' }
];

export const skills = {
  'Web Development': ['React', 'TypeScript', 'Node.js',  'Tailwind CSS'],
  'IoT & Embedded': ['Arduino', 'Raspberry Pi', 'ESP32', 'MQTT', 'Sensors'],
  // 'AI & Machine Learning': ['TensorFlow', 'PyTorch', 'OpenCV', 'Python', 'Scikit-learn'],
  // 'Tools & Technologies': ['Git', 'Docker', 'AWS', 'Firebase', 'MongoDB']
};


export const info =[{name: "Gobinda Prasad Paudel"}, {email:"gobindapaudelofficial@gmail.com"}]