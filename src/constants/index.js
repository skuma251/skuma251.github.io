import {
    mobile,
    backend,
    api,
    web,
    javascript,
    typescript,
    html,
    css,
    vuejs,
    springboot,
    aws,
    python,
    jenkins,
    java,
    graphql,
    tailwind,
    nodejs,
    mongodb,
    docker,
    asu,
    cognizant,
    ibm,
    amex,
    elderabuse,
    cassess,
    crimewatch,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "API Developer",
      icon: api,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DevOps Engineer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "springboot",
      icon: springboot,
    },
    {
      name: "python",
      icon: python,
    },
    // {
    //   name: "jenkins",
    //   icon: jenkins,
    // },
    {
      name: "java",
      icon: java,
    },
    {
      name: "graphql",
      icon: graphql,
    },
  ];
  
  const experiences = [
    {
      title: "Programmer Analyst",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#FFFFFF",
      date: "September 2016 - June 2019",
      points: [
        "Maintained and optimized the service-oriented architecture for Walgreens health cloud and loyalty, supporting over 500,000 transactions per day and achieving 99.9% uptime.",
        "Developed a certificate management tool leveraging Vue.js and Node.js, granting access to certificates on 50+ backend servers.",
        "Devised and integrated Python script to alert users about certificates expiring within 90 days, reducing certificate-related incidents by 90% and fortifying overall security.",
        "Implemented Python scripts to automate backup processes for 85 physical servers, resulting in a 70% decrease in manual effort.",
      ],
    },
    {
      title: "Application Developer",
      company_name: "IBM",
      icon: ibm,
      iconBg: "#E6DEDD",
      date: "June 2019 - July 2021",
      points: [
        "Crafted 200+ APIs with high availability, serving as the API layer for mobile and internet banking applications at ANZ.",
        "Optimized JavaScript for request handling, message transformation, and error management, augmenting application responsiveness and minimizing error incidents.",
        "Led the development of an advanced backend framework, fostering clean coding practices to slash code complexity by 60% and improve maintainability by 75%, ensuring a scalable codebase.",
        "Revamped the CI/CD process by employing Jenkins, Bitbucket, and Python script automation, decreasing the deployment time by 30% and promoting team productivity by 25%.",
      ],
    },
    {
      title: "Software Engineer II",
      company_name: "American Expresss",
      icon: amex,
      iconBg: "#383E56",
      date: "July 2021 - July 2022",
      points: [
        "Managed the migration of webservices from IBM DataPower to cloud, reducing data center cost by 31%.",
        "Established a comprehensive DevOps infrastructure, supporting efficient deployment of APIs and web services, accelerating the release frequency from bi-monthly cycle to bi-weekly cycle.",
        "Streamlined operational efficiency by curtailing manual activities by 20 hours per week, with a Java Spring Boot application and providing an interface to invoke admin APIs.",
        "Architected a RESTful server on Node.js, resulting in a 2ms response time improvement for database access."
      ],
    },
    {
      title: "Research Aide",
      company_name: "Arizona State University",
      icon: asu,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Spearheaded the development of an innovative platform for the Department of Justice, transforming the way Death investigators and Forensic Researchers access and contribute to an extensive library of bone models.",
        "Designed a cutting-edge 3D model viewer harnessing 3JS and Typescript, empowering users to compare, annotate, and conduct in-depth research on bone models, with the ability to view up to 4 simultaneous perspectives."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I am Subham's professor and mentor, he works in my lab. He is an outstanding candidate for hire, Among the best in my over 2 decades of experience with students. Reach out to me if you wish to know more details",
      name: "Kevin Gary",
      designation: "Associate Professor",
      company: "Arizona State University",
      image: "",
    },
    // {
    //   testimonial:
    //     "",
    //   name: "",
    //   designation: "",
    //   company: "",
    //   image: "",
    // },
    // {
    //   testimonial:
    //     "",
    //   name: "",
    //   designation: "",
    //   company: "",
    //   image: "",
    // },
  ];
  
  const projects = [
    {
      name: "Elder Abuse",
      description:
        "Comprehensive project developing a digital diagnostic tool and skeletal atlas to differentiate elder abuse from accidental injury. Utilizes radiographs and bone samples to uncover trauma patterns, aiding diagnosis, education, and prevention of elder abuse nationally.",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: elderabuse,
      source_code_link: "",
    },
    {
      name: "CaSSeSS",
      description:
        "Web application for student feedback in Agile-based courses. Utilizing visualizations and notifications, it ensures student compliance with project milestones. Facilitates continuous assessment in scaffolded learning processes for an enhanced educational experience",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: cassess,
      source_code_link: "https://github.com/skuma251/CaSSes",
    },
    {
      name: "Crimewatch",
      description:
        "An integrated crime data system for NYC using Protege, RDF, and Java Springboot's RESTful APIs for an interactive Vue.js interface. Connects disparate data sources to facilitate insightful exploration of crime patterns and incidents. It has flexibity to expand for any city by uploading the rdf data in fuseki server.",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "spring-boot",
          color: "green-text-gradient",
        },
        {
          name: "fuseki",
          color: "pink-text-gradient",
        },
      ],
      image: crimewatch,
      source_code_link: "https://github.com/skuma251/SER531_Crimewatch",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };