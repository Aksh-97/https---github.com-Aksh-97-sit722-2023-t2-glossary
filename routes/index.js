var express = require('express');
var router = express.Router();
const itemList= [
  { 'id':1, 'title': 'DevOps','description': 'An approach for software development that tries to reduce the gap between the development and operations teams to boost efficiency in the delivery and upkeep of software systems.',
  'reference':'[1]GitLab, “DevOps explained,” GitLab, May 23, 2022. https://about.gitlab.com/topics/devops/'},
  
  { 'id':2 , 'title': 'continous deployment','description': 'Continuous deployment is a strategy for software development and releases in which every code change is automatically run through a pipeline of tests and inspections before being pushed into production. ',
    'reference':'“What is continuous deployment? | Definition from TechTarget,” IT Operations. https://www.techtarget.com/searchitoperations/definition/continuous-deployment'},
  
  { 'id':3 , 'title': 'containerization ','description':' Containerization in DevOps refers to the practice of packaging an application and all its dependencies, libraries, and configurations together into a single container image.'
    ,'reference':'“What Are Containers and Containerization in DevOps?,” Papertrail. https://www.papertrail.com/solution/tips/what-are-containers-and-containerization-in-devops/'},

  { 'id':4 , 'title': 'Dockerfile ','description': 'A Dockerfile is a text file that contains a set of instructions for building a Docker container image. It specifies the base image, adds necessary dependencies, copies the application code, and sets up the configuration'
    ,'reference':'What is Docker in DevOps? How Does it Work? Tutorial Guide For Beginners – Gyansetu.” https://www.gyansetu.in/blogs/what-is-docker-in-devops-how-does-it-work/#:~:text=Using%20Docker%20with%20DevOps%20makes'},

  { 'id':5, 'title': 'kubernetes','description': ': An open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications',
'reference':'“Kubernetes and DevOps | Role, Importrance & Impact in DevOps,” intellipaat.com. https://intellipaat.com/blog/kubernetes-and-devops/?US#:~:text=What%20is%20the%20use%20of (accessed Jul. 26, 2023).'},

  { 'id':6 , 'title': 'git ','description': 'A widely used distributed version control system that allows developers to collaborate on code and track changes to files.',
    'reference':'mijacobs, “What is Git? - Azure DevOps,” learn.microsoft.com. https://learn.microsoft.com/en-us/devops/develop/git/what-is-git'},

  { 'id':7, 'title': 'High Availability (HA):  ','description': 'The property of a system or application that ensures it remains operational and accessible even in the face of failures.',
    'reference':'L. Syhakhom, “DevOps and High Availability When Deploying with AWS,” Logicworks, Oct. 23, 2014. https://www.logicworks.com/blog/2014/10/devops-high-availability-deploying-aws/ (accessed Jul. 26, 2023).'},

  { 'id':8 , 'title': 'Continuous Integration (CI) ','description': 'The practice of frequently integrating code changes into a shared repository. CI aims to automate the process of building, testing, and validating code changes to detect integration issues early.',

  'reference':'I. Sacolick, “What is CI/CD? Continuous integration and continuous delivery explained,” InfoWorld, May 10, 2018. https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html'},

  { 'id':9 , 'title': 'pipeline ','description': 'An automated series of steps that code changes go through, typically used in CI/CD to build, test, and deploy applications.',
  'reference':'“How to Build a DevOps Pipeline: A Beginner’s Guide,” PagerDuty. https://www.pagerduty.com/resources/learn/what-is-a-pipeline-in-devops-and-how-to-build/ (accessed Jul. 26, 2023)'},

  { 'id':10 , 'title': 'microservices ','description':  'An architectural approach where applications are broken down into small, independent services that can be developed, deployed, and scaled independently.',
   'reference':'cloud, “DevOps and Microservices: Impact on Enterprise Applications,” Successive Cloud, Nov. 15, 2021. https://successive.cloud/devops-microservices-impact-on-enterprise-applications/'},
  
   { 'id':11 , 'title': 'customer support team ','description':  'nteracts with customers and handles support requests. They could experience confusion if theres a lack of information about changes or if the software has frequent issues due to improper deployment or configuration.',
   'reference':'Atlassian, “How to run IT support the DevOps way,” Atlassian. https://www.atlassian.com/itsm/service-request-management/how-to-run-it-support-devops-way'},
   
   { 'id':12 , 'title': 'bussiness stakeholders ','description':  'hey might face confusion if the DevOps implementation does not deliver the expected value or if there are delays in delivering new features.',
   'reference':'G. link, Facebook, Twitter, Pinterest, Email, and O. Apps, “DevOps Stakeholders – Who Are They?,” Oct. 30, 2018. https://www.itsmprofessor.net/2018/10/devops-stakeholders-who-are-they.html'},
  
   { 'id':13 , 'title': 'end users ','description':  'The ultimate consumers of the software who may be affected by any issues arising from confusion or miscommunication during the DevOps process.',
   'reference':'ontributor, “3 Approaches to End-User Experience Monitoring,” DevOps.com, Jan. 18, 2017. https://devops.com/3-approaches-experience-monitoring/ (accessed Aug. 05, 2023).'},
  
   { 'id':14 , 'title': 'release management team ','description':  'Responsible for coordinating and planning software releases. They may encounter confusion if there are last-minute changes or if the deployment process is not well-defined',
   'reference':'“Importance of DevOps Team Structure,” BrowserStack. https://www.browserstack.com/guide/importance-of-devops-team-structure (accessed Aug. 05, 2023).'},
  
   { 'id':15 , 'title': 'IT management  ','description':  'Overseeing the entire IT department and responsible for making strategic decisions.',
   'reference':'“Importance of DevOps Team Structure,” BrowserStack. https://www.browserstack.com/guide/importance-of-devops-team-structure (accessed Aug. 05, 2023).'},
  
   { 'id':16 , 'title': 'product managers/teams ','description':  'An architectural approach where applications are broken down into small, independent services that can be developed, deployed, and scaled independently.',
   'reference':'A Product Manager’s best friend: DevOps,” www.linkedin.com. https://www.linkedin.com/pulse/product-managers-best-friend-devops-jared-franklin/ (accessed Aug. 05, 2023).'},
  

   { 'id':17 , 'title': 'security teams ','description':  'An architectural approach where applications are broken down into small, independent services that can be developed, deployed, and scaled independently.',
   'reference':'mijacobs, “Security in DevOps (DevSecOps) - Azure DevOps,” learn.microsoft.com, Nov. 28, 2022. https://learn.microsoft.com/en-us/devops/operate/security-in-devops (accessed Aug. 05, 2023).'},

   { 'id':18 , 'title': 'Test Driven Development (TDD) ','description':  'A development methodology where tests are written before the actual code to ensure that the code meets the desired requirements.',
   'reference':'S. Kawaguchi, “Revisiting Test-Driven Development for a DevOps World,” The Startup, Jun. 28, 2020. https://medium.com/swlh/revisiting-test-driven-development-for-a-devops-world-401f1f8d3275 (accessed Aug. 05, 2023).'},

   { 'id':19 , 'title': 'Application Performance Monitoring (APM) ','description':  'Monitoring and managing the performance and availability of software applications.',
   'reference':'“Application Performance Monitoring in DevOps,” www.softwaretestinghelp.com. https://www.softwaretestinghelp.com/application-performance-monitoring-in-devops/'},

   { 'id':20 , 'title': 'Version Control System (VCS) ','description':  'Software tools that help manage changes to source code over time, allowing teams to collaborate on code development and track its history.',
   'reference':'mijacobs, “What is version control? - Azure DevOps,” learn.microsoft.com. https://learn.microsoft.com/en-us/devops/develop/git/what-is-version-control'},
  
  ];

  //getting home page//

router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT-722', items: itemList });
});

module.exports = router;