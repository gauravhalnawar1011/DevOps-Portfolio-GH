import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;
  ƒ
  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
    {
      id: 1,
      title: 'Terraform-aws-s3 Module',
      desc: '',
      livedemo: 'https://github.com/gauravhalnawar1011/S3BucketPathViewer',
      githurl: 'https://github.com/gauravhalnawar1011/S3BucketPathViewer ',
      registry: '',
      imgUrl: 'assets/images/terraform.png',
      tech: 'Terraform and AWS '
    },

    {
      id: 2,
      title: 'Monitoring Your Backend with New Relic: A Step-by-Step Integration Guide',
      desc: '',
      // livedemo: 'https://mayank0202.github.io/Birthday/',
      // githurl: 'https://github.com/mayank0202/Birthday',
      mediumlink: 'https://gauravhalnawar.hashnode.dev/monitoring-your-backend-with-new-relic-a-step-by-step-integration-guide',
      imgUrl: 'assets/images/new_relic.png',
      tech: 'New Relic CICD Jenkins'
    },


    {
      id: 3,
      title: 'How to Handle Lambda Dependencies with Ease',
      desc: '',
      livedemo: '',
      // githurl: 'https://github.com/mayank0202/full-stack-Assignments',
      mediumlink: 'https://gauravhalnawar.hashnode.dev/how-to-handle-lambda-dependencies-with-ease',
      imgUrl: 'assets/images/lambdas.png',
      tech: 'Linux S3 Lambda'
    },

    {
      id: 4,
      title: 'Set Up OpenVPN on EC2',
      desc: '',
      // livedemo: 'https://chatapp-using-node.herokuapp.com/',
      // githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink: 'https://gauravhalnawar.hashnode.dev/how-to-set-up-openvpn-on-ec2-a-step-by-step-guide',
      imgUrl: 'assets/images/Openvpn.png',
      tech: 'Openvpn Security Cloud'
    },


    {
      id: 5,
      title: 'Automating Data Processing with AWS Glue, S3, and Lambda',
      desc: '',
      mediumlink: 'https://gauravhalnawar.hashnode.dev/automating-data-processing-with-aws-glue-s3-and-lambda',
      imgUrl: 'assets/images/glue.png',
      tech: 'AWS Glue Python Lambdas'
    },



    {
      id: 6,
      title: 'Docker Images and Containers Important commands',
      desc: '',
      livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/mehulk05/NewsApp-using-React',
      mediumlink: 'https://gauravhalnawar.hashnode.dev/docker-images-and-containers-important-commands',
      imgUrl: 'assets/images/docker.png',
      tech: 'Docker'
    },



    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    // },



    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },


    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },


    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap'
    // },


    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]
  about2 = `Designed and deployed scalable infrastructure using Terraform, automating AWS resource provisioning, including Lambda, SNS, SQS, and VPC . Created and managed an EKS cluster from scratch, optimizing containerized application deployments . Developed Dockerfiles for multiple services and written docker-compose configurations to build images and push them to Amazon ECR for seamless containerized deployments . Automated CI/CD pipelines using Jenkins, enhancing deployment efficiency and reliability . Implemented infrastructure automation using Terraform, reducing manual provisioning tasks . Managed AWS assets and integrated multiple AWS services into scalable solutions . Created Amazon Machine Images (AMIs) and snapshots for backup and disaster recovery purposes. Hosted and managed static websites on Amazon S3, ensuring high availability and cost efficiency . Migrated batch processes to AWS Lambda, optimizing scalability and cost management . Configured and maintained SonarQube for continuous inspection of code quality . Monitored system performance and managed project tracking via JIRA, ensuring efficient sprint planning and execution . Identified and mitigated single points of failure and security vulnerabilities within the infrastructure . Documented cloud architecture and best practices using Confluence to streamline knowledge sharing among team members ,
`

  about = "Results-driven DevOps Engineer with a proven track record of 2 years in supporting, automating, and optimizing mission-critical deployments on AWS . Proficient in leveraging advanced configuration management, CI/CD practices, Terraform, and a strong understanding of DevOps methodologies. Seeking a challenging position where I can contribute my expertise, drive innovation, and adapt to evolving technologies while fostering professional growth."
  resumeurl = "https://drive.google.com/file/d/1v-L8mSGBR-yYW_peLkzN7IpCPapVr1lp/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Terraform',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'Aws Services',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'Python & Shell Scripting Linux',
      'progress': '70%'
    },
    {
      'id': '4',
      'skill': 'MYSQL, DynmoDB',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Docker',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'Kubernetes',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'Jenkins',
      'progress': '70%'
    },
    {
      'id': '8',
      'skill': 'Helm',
      'progress': '60%'
    },
    {
      'id': '10',
      'skill': 'Bitbucket, JIRA, Confluence',
      'progress': '80%'
    },

    {
      'id': '11',
      'skill': 'Helm',
      'progress': '60%'
    },
  ];


  educationData: any = [
//     {
//       'id': '1',
//       'from_to_year': '2019 - 2013',
//       'education': 'Bachelor\'s Degree',
//       'stream': 'Bachelor of Engineering',
//       'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
// Completed B.E in Computer Engineering with 9.54 CGPA.  
// Won the Best Student Award 3 times for excellent Academic records at College. 
// Maintained above 9.1 spi in every semester of college academic .`,
//       'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
//     },
//     {
//       'id': '2',
//       'from_to_year': '2013 - 2015',
//       'education': 'Higher Secondary',
//       'stream': 'Science and Mathematics',
//       'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
//       'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
// There was also a good base on physics, mathematics and chemistry.
// Completed my high school with 78%.`
//     },
//     {
//       'id': '3',
//       'from_to_year': '2012 - 2013',
//       'education': 'Secondary  School',
//       'stream': 'Science and Mathematics',
//       'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
//       'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
// Completed my Secondary school with 84%.`
//     }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Equip9',
      location: 'Pune Maharashtra, India',
      timeline: 'Jan 2024 to Present',
      role: 'AWS Cloud Consultant',
      work: 'Working as a AWS Devops Engineer .Responsible for handling and Managing the CI/CD work and also handles the docker files and scripts for automation. Developed Dockerfiles for multiple services and written docker-compose configurations to build images and push them to Amazon ECR for seamless containerized deployments   .Implemented infrastructure automation using Terraform, reducing manual provisioning tasks   .Hosted and managed static websites on Amazon S3, ensuring high availability and cost efficiency    .Managed AWS assets and integrated multiple AWS resources into solutions appropriate for company projects    .Monitored system performance and managed project tracking via JIRA, ensuring efficient sprint planning and execution    .Documented cloud architecture and best practices using Confluence to streamline knowledge sharing among team members',

    },
    {
      id: 5,
      company: 'Vinsys',
      location: 'Pune Maharashtra, India',
      timeline: 'Aug 2023 to Dec 2023',
      role: 'Cloud Application Developer',
      work: 'Participated in an intensive 3-month course aimed at developing cloud skills and knowledge .Gained practical experience and theoretical knowledge in cloud computing, with a focus on developing and deploying applications on AWS . Acquired skills in AWS core services, basic infrastructure, and security practices, positioning me to effectively contribute to technology-driven projects . Recognized as the topper of the batch, showcasing exceptional skills and understanding of cloud technologies .Mentored peers by addressing their doubts and providing guidance, enhancing their learning experience '

    },
    {
      id: 6,
      company: 'LTIMindtree',
      location: 'Pune Maharashtra, India',
      timeline: 'JAN 2022 to May 2022',
      role: 'Graduate Engineer Trainee',
      work: 'As a Graduate Engineer Trainee, I underwent a 3-month intensive hands-on training program focused on AWS and Terraform, which helped me build a strong foundation in cloud computing . During this period, I gained practical experience in provisioning and managing cloud resources using AWS services, and automating infrastructure deployment with Terraform . I developed hands-on skills in building scalable and secure cloud architectures, and collaborated with the team to streamline processes, ensuring efficient application deployment and management in the cloud environment '
    },


  ]

  skills(): Observable<any> {

    return this.skillsData;
  }

  getProjects(): Observable<any> {

    return this.projects;
  }
  education(): Observable<any> {

    return this.educationData;
  }

  exprience(): Observable<any> {

    return this.exprienceData;
  }
}
