import axios from "axios";
import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Button, Container, CssBaseline, Grid } from "@mui/material";
import Header from "./Header";
import Filter from "./Filter";
import JobCard from "./JobCard";



export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


const testData = [
  {
    "title": "Federal - Java Developer",
    "company_name": "Accenture",
    "location": "  St. Louis, MO   (+2 others)   ",
    "via": "via Accenture",
    "description": "Organization: Accenture Federal Services\n\nLocation: Washington, DC; San Antonio, TX; St. Louis, MO...\n\nWe are:  \n\nAccenture Federal Services, bringing together commercial innovation with the latest technology to unleash the potential for our federal clients. Operating in the nation's Capital, we stay ahead of what’s coming next. Drawing from the power of Accenture, we deliver integrated, mobile and interactive experiences that exceed our people’s expectations. Join us where ideas are freely exchanged, and concepts evolve into practical solutions.\n\nYou are:  \n\nA motivated, inquisitive developer. You use your skills to deliver innovative solutions that help our federal clients improve the services they provide to the American public. Driven by curiosity, you explore how new technologies can be applied to solve challenging business problems. You thrive in a collaborative, creative and productive team environment.\n\nThe work:\n• Apply application design and development across multiple technology areas\n• Configure software products and systems\n• Develop product and platform prototypes\n• Develop proof of concepts across the technology stack\n• Drive consistent quality solution development and delivery",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "A motivated, inquisitive developer",
          "You thrive in a collaborative, creative and productive team environment"
        ]
      },
      {
        "title": "Responsibilities",
        "items": [
          "Apply application design and development across multiple technology areas",
          "Configure software products and systems",
          "Develop product and platform prototypes",
          "Develop proof of concepts across the technology stack",
          "Drive consistent quality solution development and delivery"
        ]
      }
    ],
    "related_links": [
      {
        "link": "http://www.accenture.com/",
        "text": "accenture.com"
      },
      {
        "link": "https://www.google.com/search?q=Accenture&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCM0J",
        "text": "See web results for Accenture"
      }
    ],
    "extensions": [
      "Full-time"
    ],
    "detected_extensions": {
      "schedule_type": "Full-time"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJGZWRlcmFsIC0gSmF2YSBEZXZlbG9wZXIiLCJodGlkb2NpZCI6Im5XckRvRERBRHk4QUFBQUFBQUFBQUE9PSIsImZjIjoiRXZjQkNyY0JRVVZ6TjJwT1VqSktjME5vVUc1VFQwcFZaSFJCUVc5cVprZFJOelI0YkZCeWJreE1TRFl4TFhGSE5WOHlUVGhKUlU4d1kxOWpibGRDU1ZKMVYxbEdWbk42VFdKalpHVXpRVzl4T1dOM1JYQjJjMlJQV21oU1ptMWphVlZEZVZCemRHbzRlV1UxTW01VVoyMXlWMnR0WmpObU1UQjZZV2RYY1Y5ZmFGQnZUVUpQTlZSdFlYcHlXazVDVFVJNFdYTXpNbTVJYmtWelZrNHpaWEZhZFVSd1lWZEthSHA0YVRsRFJGSnVZa3RKZG5aM2FIQjRjRkJ6RWhkbFEzbFNXazVFUVVoTlMyYzFUbTlRZUhSdFZHMUJjeG9pUVU4dE1ISnNOemRZTWxseVMwaFNXRWgyUWtscVNVMUpaRmg1Y1haR1JGcFpkdyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzEiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiLm5GZzJlYntmb250LXdlaWdodDo1MDB9LkJpNkRkY3tmb250LXdlaWdodDo1MDB9QXBwbHkgb24gQWNjZW50dXJlIiwibGluayI6Imh0dHBzOi8vd3d3LmFjY2VudHVyZS5jb20vdXMtZW4vY2FyZWVycy9qb2JkZXRhaWxzP2lkPVIwMDAwODU5OF9lblx1MDAyNnV0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
  },
  {
    "title": "Java Developer/Senior Developer, IT Applications",
    "company_name": "American Airlines",
    "location": "  Dallas, TX   ",
    "via": "via Jobs At American Airlines",
    "description": "Location: DFW Headquarters Building 8 (DFW-SV08)\n\nAdditional Locations: None...\n\nRequisition ID: 67829\n\nIntro\n\nAre you ready to explore a world of possibilities, both at work and during your time off? Join our American Airlines family, and you’ll travel the world, grow your expertise and become the best version of you. As you embark on a new journey, you’ll tackle challenges with flexibility and grace, learning new skills and advancing your career while having the time of your life. Feel free to enrich both your personal and work life and hop on board!\n\nWhy you'll love this job\n• ​This job is a member of the Information Technology Team within the Information Technology Division\n• Responsible for leveraging cutting edge technology to solve business problems at American Airlines by participating in all phases of the development process from inception through transition, advocating the agile process and test-driven development, using object-oriented development tools to analyze, model, design, construct and test reusable objects, and making the codebase a better place to live and work\n\nWhat you'll do\n• ​Collaborates with leaders, business analysts, project managers, IT architects, technical leads and other developers, along with internal customers, to understand requirements and develop needs according to business requirements\n• Maintains and enhances existing enterprise services, applications, and platforms using domain driven design and test-driven development\n• Troubleshoots and debugs complex issues; identifies and implements solutions\n• Creates detailed project specifications, requirements, and estimates\n• Researches and implements new technologies to enhance current processes, security, and performance\n• Supports the development of coding standards and adheres to best practices and security guidelines\n• Works closely with software architects and technical leads to ensure decisions meet long-term enterprise growth needs\n\nAll you'll need for success\n\nMinimum Qualifications- Education & Prior Job Experience\n• ​Bachelor's degree in Computer Science, Computer Engineering, Technology, Information Systems (CIS/MIS), Engineering or related technical discipline, or equivalent experience/training\n• 3 years of full Software Development Life Cycle (SDLC) experience designing, developing, and implementing large-scale applications in hosted production environments\n• 3 years of professional, design, and open-source experience\n\nPreferred Qualifications- Education & Prior Job Experience\n• ​Master's degree in Computer Science, Computer Engineering, Technology, Information Systems (CIS/MIS), Engineering or related technical discipline, or equivalent experience/training\n• 5 years of full Software Development Life Cycle (SDLC) experience\n• Experience architecting and implementing data analytics solutions in Azure\n• Experience in a relevant cloud, Kubernetes, automation development, and/or orchestration positions\n• Experience with Event driven architecture using Kafka\n• Airline Industry experience\n\nSkills, Licenses & Certifications\n• Proficiency in Full Stack Development\n• ​Proficiency and demonstrated experience in the following technologies:\n• J2EE technologies: Java, JSP, JMS, JAXB, JDBC, EJB\n• Database and persistence frameworks: Hibernate, Oracle, Object/Relational Mapping, Query performance tuning\n• Cloud-based development: Cloud Foundry\n• Web Servers: Tomcat, tcServer, Websphere\n• Web Services: REST/SOAP (JSON/WSDL/XML)\n• Frameworks: Spring Framework, Spring Boot\n• Front-end: Angular JS, Ext JS, CSS, jQuery, AJAX\n• Build/deployment tools: Maven, Gradel, Git, Junit, Mockito\n• Other Dev Ops Toolchain: Selenium, Nexus Repository, Hygieia, SonarQube, Fortify on Demand, Slack, GitHub, Jenkins, ElasticSearch, Logstaash, Kibana, New Relic\n• Other: Linux/Unix shell Scripting, JavaScript, IBM MQ/Rabbit MQ, Tivoli Scheduler, SQL Developer, IDE\n• Proficiency in object-oriented design techniques and principles\n• Proficiency in Microsoft Office Tools (Project, Excel, Word, PowerPoint, etc.)\n• Experience in Agile methodologies, such as SCRUM\n• Experience in DevOps Toolchain methodologies, including Continuous Integration and Continuous Deployment\n\nWhat you'll get\n\nFeel free to take advantage of all that American Airlines has to offer:\n• Travel Perks: Ready to explore the world? You, your family and your friends can reach 365 destinations on more than 6,800 daily flights across our global network.\n• Health Benefits: On day one, you’ll have access to your health, dental, prescription and vision benefits to help you stay well. And that’s just the start, we also offer virtual doctor visits, flexible spending accounts and more.\n• Wellness Programs: We want you to be the best version of yourself – that’s why our wellness programs provide you with all the right tools, resources and support you need.\n• 401(k) Program: Available upon hire and, depending on the workgroup, employer contributions to your 401(k) program are available after one year.\n• Additional Benefits: Other great benefits include our Employee Assistance Program, pet insurance and discounts on hotels, cars, cruises and more\n\nFeel free to be yourself at American\n\nFrom the team members we hire to the customers we serve, inclusion and diversity are the foundation of the dynamic workforce at American Airlines. Our 20+ Employee Business Resource Groups are focused on connecting our team members to our customers, suppliers, communities and shareholders, helping team members reach their full potential and creating an inclusive work environment to meet and exceed the needs of our diverse world.\n\nAre you ready to feel a tremendous sense of pride and satisfaction as you do your part to keep the largest airline in the world running smoothly as we care for people on life’s journey? Feel free to be yourself at American.\n\nAdditional Locations: None\n\nRequisition ID: 67829",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "Minimum Qualifications- Education & Prior Job Experience",
          "​Bachelor's degree in Computer Science, Computer Engineering, Technology, Information Systems (CIS/MIS), Engineering or related technical discipline, or equivalent experience/training",
          "3 years of full Software Development Life Cycle (SDLC) experience designing, developing, and implementing large-scale applications in hosted production environments",
          "3 years of professional, design, and open-source experience",
          "Skills, Licenses & Certifications",
          "Proficiency in Full Stack Development",
          "​Proficiency and demonstrated experience in the following technologies:",
          "J2EE technologies: Java, JSP, JMS, JAXB, JDBC, EJB",
          "Database and persistence frameworks: Hibernate, Oracle, Object/Relational Mapping, Query performance tuning",
          "Web Services: REST/SOAP (JSON/WSDL/XML)",
          "Frameworks: Spring Framework, Spring Boot",
          "Front-end: Angular JS, Ext JS, CSS, jQuery, AJAX",
          "Build/deployment tools: Maven, Gradel, Git, Junit, Mockito",
          "Other Dev Ops Toolchain: Selenium, Nexus Repository, Hygieia, SonarQube, Fortify on Demand, Slack, GitHub, Jenkins, ElasticSearch, Logstaash, Kibana, New Relic",
          "Other: Linux/Unix shell Scripting, JavaScript, IBM MQ/Rabbit MQ, Tivoli Scheduler, SQL Developer, IDE",
          "Proficiency in object-oriented design techniques and principles",
          "Proficiency in Microsoft Office Tools (Project, Excel, Word, PowerPoint, etc.)",
          "Experience in Agile methodologies, such as SCRUM",
          "Experience in DevOps Toolchain methodologies, including Continuous Integration and Continuous Deployment"
        ]
      },
      {
        "title": "Responsibilities",
        "items": [
          "​Collaborates with leaders, business analysts, project managers, IT architects, technical leads and other developers, along with internal customers, to understand requirements and develop needs according to business requirements",
          "Maintains and enhances existing enterprise services, applications, and platforms using domain driven design and test-driven development",
          "Troubleshoots and debugs complex issues; identifies and implements solutions",
          "Creates detailed project specifications, requirements, and estimates",
          "Researches and implements new technologies to enhance current processes, security, and performance",
          "Supports the development of coding standards and adheres to best practices and security guidelines",
          "Works closely with software architects and technical leads to ensure decisions meet long-term enterprise growth needs"
        ]
      },
      {
        "title": "Benefits",
        "items": [
          "As you embark on a new journey, you’ll tackle challenges with flexibility and grace, learning new skills and advancing your career while having the time of your life",
          "Travel Perks: Ready to explore the world?",
          "You, your family and your friends can reach 365 destinations on more than 6,800 daily flights across our global network",
          "Health Benefits: On day one, you’ll have access to your health, dental, prescription and vision benefits to help you stay well",
          "And that’s just the start, we also offer virtual doctor visits, flexible spending accounts and more",
          "Wellness Programs: We want you to be the best version of yourself – that’s why our wellness programs provide you with all the right tools, resources and support you need",
          "401(k) Program: Available upon hire and, depending on the workgroup, employer contributions to your 401(k) program are available after one year",
          "Additional Benefits: Other great benefits include our Employee Assistance Program, pet insurance and discounts on hotels, cars, cruises and more"
        ]
      }
    ],
    "related_links": [
      {
        "link": "http://www.aa.com/",
        "text": "aa.com"
      },
      {
        "link": "https://www.google.com/search?q=American+Airlines&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCJYK",
        "text": "See web results for American Airlines"
      }
    ],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5USepu78Tv8EtmvtbA51WsROrnC2bUC-ifW2&s=0",
    "extensions": [
      "4 days ago",
      "Full-time",
      "Health insurance",
      "Dental insurance"
    ],
    "detected_extensions": {
      "posted_at": "4 days ago",
      "schedule_type": "Full-time"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJKYXZhIERldmVsb3Blci9TZW5pb3IgRGV2ZWxvcGVyLCBJVCBBcHBsaWNhdGlvbnMiLCJodGlkb2NpZCI6IlZYbHdWc2pneFVrQUFBQUFBQUFBQUE9PSIsImZjIjoiRXFJQ0N1SUJRVVZ6TjJwT1ZGWnBVVTFZVTFoMFYzZEdOVXRsWm14MlJGUmFUa2R5ZVcxQ1JHZFBVMDkzVjBscFpWWTFSakpVZEU4M2JIbzFORTUxVVd4SmNrbEtWWGRuVW1WbVgybG1ia05oU3kwM1JFOW5jRVptUm5aeVkwRTRUSFpQU0dGblkxVkVhVlZtWTNCRlJIUjVNVmRGVEZoRk5XVXdVa0pwWWxCVFRFUjRRalJSWTFOdk1YZFdWa1JyVGtNeFRIaHRVSFpIZUROUWMxOVpPRFYxUlRaR0xTMXphMjVIVjBsb1lteGhTMUZWZWxJd2FFRXRXVEpHTW1wQlpVVmtZbVI2VTNwalpXSTBUbkJTU2xabWEwZHRkWFJVZEZsbVQxRnhRMEpOZEhNdFVFMHdVUklYWlVONVVscE9SRUZJVFV0bk5VNXZVSGgwYlZSdFFYTWFJa0ZQTFRCeWJEWlVPSHBqWDJWSVdrZExaRE5SVEVoWWVsQXdTVmxGYWs1dWQzYyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzMiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gSm9icyBBdCBBbWVyaWNhbiBBaXJsaW5lcyIsImxpbmsiOiJodHRwczovL2pvYnMuYWEuY29tL2pvYi9KYXZhLURldmVsb3BlclNlbmlvci1EZXZlbG9wZXIlMkMtSVQtQXBwbGljYXRpb25zLzEwNDE1NTYwMDAvP3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
  },
  {
    "title": "Java Dev",
    "company_name": "Apex Systems, Inc.",
    "location": "  Orlando, FL   ",
    "via": "via Professional Diversity Network",
    "description": "Apex Systems, a World-Class Technology Solutions Provider, is seeking applicants for the below position on behalf of our client. Please apply if interested and qualified. Please note that only qualified candidates will be contacted.\n\nPosition: Sr. Java Developer...\n\nLocation: Hybrid in Orlando, FL\n\nDuration: 12 month contract\n\nMust be able to work on W2 without sponsorship\n\nMust Haves:\n• 5+ years experience\n• Java 11+\n• AWS cloud infrastructure - cloud deployment exp\n• Java Reactive (backend NOT Front end React)\n• Flux, Mono, and Java streaming exp\n• Please note that as a contract employee of Apex Systems, benefits include the below with employee contribution*\n• Health\n• Dental\n• Vision\n• Life Insurance; Short Term Disability\n• Hospitalization Coverage\n• Direct Deposit\n• Weekly Pay Periods\n• Training and Development Programs\n• 401k\n• Referral Program\n\nEEO Employer\n\nApex Systems is an equal opportunity employer. We do not discriminate or allow discrimination on the basis of race, color, religion, creed, sex (including pregnancy, childbirth, breastfeeding, or related medical conditions), age, sexual orientation, gender identity, national origin, ancestry, citizenship, genetic information, registered domestic partner status, marital status, disability, status as a crime victim, protected veteran status, political affiliation, union membership, or any other characteristic protected by law. Apex will consider qualified applicants with criminal histories in a manner consistent with the requirements of applicable law. If you have visited our website in search of information on employment opportunities or to apply for a position, and you require an accommodation in using our website for a search or application, please contact our Employee Services Department at employeeservices@apexsystems.com or 844-463-6178.\n\nVEVRAA Federal Contractor\nWe request Priority Protected Veteran & Disabled Referrals for all of our locations within the state.\nWe are an equal opportunity employer. We evaluate qualified applicants without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, veteran status, or any other protected characteristic. The EEO is the Law poster is available here.\nPDN-996b86a5-c83e-41e4-8509-0fc32479c5e5",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "Must be able to work on W2 without sponsorship",
          "5+ years experience",
          "Java 11+",
          "AWS cloud infrastructure - cloud deployment exp",
          "Java Reactive (backend NOT Front end React)",
          "Flux, Mono, and Java streaming exp",
          "Vision"
        ]
      },
      {
        "title": "Benefits",
        "items": [
          "Life Insurance; Short Term Disability",
          "Hospitalization Coverage",
          "Direct Deposit",
          "Weekly Pay Periods",
          "Training and Development Programs",
          "401k",
          "Referral Program"
        ]
      }
    ],
    "related_links": [
      {
        "link": "http://www.apexsystems.com/",
        "text": "apexsystems.com"
      },
      {
        "link": "https://www.google.com/search?q=Apex+Systems,+Inc.&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCOMK",
        "text": "See web results for Apex Systems, Inc."
      }
    ],
    "extensions": [
      "4 days ago",
      "Contractor",
      "No degree mentioned",
      "Health insurance"
    ],
    "detected_extensions": {
      "posted_at": "4 days ago",
      "schedule_type": "Contractor"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJKYXZhIERldiIsImh0aWRvY2lkIjoiWHFEbDlvaUUxODhBQUFBQUFBQUFBQT09IiwiZmMiOiJFdmNCQ3JjQlFVVnpOMnBPVW5SR2NuSlpkbXRQV1ZOYU9Wa3dlVXhtTURWUFpUVTViMmhKVlZWVFV6aEZkR1p3Ymt4RFFVZzJOVlZQU2xKZldsWk1jWFZWTXpKdVREaFhUM1UyV2s1YVlYbG9ZbHB5Y2tkMFJtTlBja3AzYm1saUxYSnZUa2hqTjNwVlQyWnFiMUV4TnpkT1NYSkxiSFZyZG1GTFdHOHRSVTlVZUcweGRUQnVVWEoxWDIxSE0yeEdTekpSYkcxNlUwSnBXRlZvYjA4NFdYQmllVnB4TWxkS1YzQllkbFkzVldGS00xbFRWM1V4UjB0R1ZVdHZFaGRsUTNsU1drNUVRVWhOUzJjMVRtOVFlSFJ0VkcxQmN4b2lRVTh0TUhKc04wWTVUME10VDB4VVRFMWxVbUY2WVVFMWMyNVFTbGxWY1ZnM2R3IiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfNSIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBQcm9mZXNzaW9uYWwgRGl2ZXJzaXR5IE5ldHdvcmsiLCJsaW5rIjoiaHR0cHM6Ly93d3cucHJvZGl2bmV0LmNvbS9qb2IvamF2YS1kZXYtb3JsYW5kby1mbG9yaWRhLTEzMTA1NTE4P3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
  },
  {
    "title": "Fullstack Java Dev",
    "company_name": "Randstad USA",
    "location": "  Charlotte, NC   ",
    "via": "via Randstad USA",
    "description": "job summary:\nLead complex technology initiatives including those that are companywide with broad impact. Act as a key participant in developing standards and companywide best practices for engineering complex and large scale technology solutions for technology engineering disciplines. Design, code, test, debug, and document for projects and programs. Review and analyze complex, large-scale... technology solutions for tactical and strategic business objectives, enterprise technological environment, and technical challenges that require in-depth evaluation of multiple factors, including intangibles or unprecedented technical factors. Make decisions in developing standard and companywide best practices for engineering and technology solutions requiring understanding of industry best practices and new technologies, influencing and leading technology team to meet deliverables and drive new initiatives. Collaborate and consult with key technical experts, senior technology team, and external industry groups to resolve complex technical issues and achieve goals. Lead projects, teams, or serve as a peer mentor. Required Qualifications: 5+ years of Software Engineering experience, or equivalent demonstrated through one or a combination of the following: work experience, training, military experience, or education.\n\nlocation: Charlotte, North Carolina\njob type: Contract\nsalary: $68 - 69 per hour\nwork hours: 8am to 4pm\neducation: Bachelors\n\nresponsibilities:\nLead complex technology initiatives including those that are companywide with broad impact. Act as a key participant in developing standards and companywide best practices for engineering complex and large scale technology solutions for technology engineering disciplines. Design, code, test, debug, and document for projects and programs. Review and analyze complex, large-scale technology solutions for tactical and strategic business objectives, enterprise technological environment, and technical challenges that require in-depth evaluation of multiple factors, including intangibles or unprecedented technical factors. Make decisions in developing standard and companywide best practices for engineering and technology solutions requiring understanding of industry best practices and new technologies, influencing and leading technology team to meet deliverables and drive new initiatives. Collaborate and consult with key technical experts, senior technology team, and external industry groups to resolve complex technical issues and achieve goals. Lead projects, teams, or serve as a peer mentor. Required Qualifications: 5+ years of Software Engineering experience, or equivalent demonstrated through one or a combination of the following: work experience, training, military experience, or education.\n\nqualifications:\n• Experience level: Experienced\n• Minimum 5 years of experience\n• Education: Bachelors\n\nskills:\n• Java\n\nEqual Opportunity Employer: Race, Color, Religion, Sex, Sexual Orientation, Gender Identity, National Origin, Age, Genetic Information, Disability, Protected Veteran Status, or any other legally protected group status.\n\nAt Randstad, we welcome people of all abilities and want to ensure that our hiring and interview process meets the needs of all applicants. If you require a reasonable accommodation to make your application or interview experience a great one, please contact HRsupport@randstadusa.com.\n\nPay offered to a successful candidate will be based on several factors including the candidate's education, work experience, work location, specific job duties, certifications, etc. In addition, Randstad offers a comprehensive benefits package, including health, an incentive and recognition program, and 401K contribution (all benefits are based on eligibility).\n\nFor certain assignments, Covid-19 vaccination and/or testing may be required by Randstad's client or applicable federal mandate, subject to approved medical or religious accommodations. Carefully review the job posting for details on vaccine/testing requirements or ask your Randstad representative for more information",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "Required Qualifications: 5+ years of Software Engineering experience, or equivalent demonstrated through one or a combination of the following: work experience, training, military experience, or education",
          "Experience level: Experienced",
          "Minimum 5 years of experience",
          "Education: Bachelors",
          "Java"
        ]
      },
      {
        "title": "Responsibilities",
        "items": [
          "Act as a key participant in developing standards and companywide best practices for engineering complex and large scale technology solutions for technology engineering disciplines",
          "Design, code, test, debug, and document for projects and programs",
          "Review and analyze complex, large-scale technology solutions for tactical and strategic business objectives, enterprise technological environment, and technical challenges that require in-depth evaluation of multiple factors, including intangibles or unprecedented technical factors",
          "Make decisions in developing standard and companywide best practices for engineering and technology solutions requiring understanding of industry best practices and new technologies, influencing and leading technology team to meet deliverables and drive new initiatives",
          "Collaborate and consult with key technical experts, senior technology team, and external industry groups to resolve complex technical issues and achieve goals",
          "Lead projects, teams, or serve as a peer mentor",
          "work hours: 8am to 4pm"
        ]
      },
      {
        "title": "Benefits",
        "items": [
          "salary: $68 - 69 per hour",
          "In addition, Randstad offers a comprehensive benefits package, including health, an incentive and recognition program, and 401K contribution (all benefits are based on eligibility)"
        ]
      }
    ],
    "related_links": [
      {
        "link": "http://www.randstadusa.com/",
        "text": "randstadusa.com"
      },
      {
        "link": "https://www.google.com/search?q=Randstad+USA&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCK0L",
        "text": "See web results for Randstad USA"
      }
    ],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UwJPcq_ZyHL1dbkv4NfKfvmkdzs4QnOLlMzOUxD3G0GGkTKNYz21&s",
    "extensions": [
      "1 day ago",
      "68–69 an hour",
      "Full-time",
      "Health insurance",
      "Dental insurance"
    ],
    "detected_extensions": {
      "posted_at": "1 day ago",
      "schedule_type": "Full-time",
      "salary": "68–69 an hour"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJGdWxsc3RhY2sgSmF2YSBEZXYiLCJodGlkb2NpZCI6IjdRbDdfNS1QMWwwQUFBQUFBQUFBQUE9PSIsImZjIjoiRXZjQkNyY0JRVVZ6TjJwT1VYaG9iVWN3YW1nM1VXUkNiemRMVkU5emRXVXhWbWxGUjBjMVlrNTVPR2xJWkZVellWZGpSVWx2WVRRNU5VSjZVVkE1V1VSMVQzTXlOWGt0WkU4MFdXMXJiMUJMTWpObk5FdHFRVkpJYVhGeFIzUmlWRTg1V0VveldUZDVaMWR6VUdkTGJrWmpSbkJ0Y25SUVR6WlZUbXBOUldGcFRXdElaV2hNV2pNdFpWVjFha3BWUVRObWJrUldVR1JTTTFnemMzZFphVVJmVDJWdWNtSkRRMDVJUWxoYU1URXdZa0phYkc1c05uTXhOVUUwRWhkbFEzbFNXazVFUVVoTlMyYzFUbTlRZUhSdFZHMUJjeG9pUVU4dE1ISnNOa2N3WVc5a1YzTmxWRWRIV1ZGM016UjNkazVpWDNCQ1pETXhRUSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzciLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gUmFuZHN0YWQgVVNBIiwibGluayI6Imh0dHBzOi8vd3d3LnJhbmRzdGFkdXNhLmNvbS9qb2JzLzQvMTAxNTg3Ny9mdWxsc3RhY2stamF2YS1kZXZfY2hhcmxvdHRlLz91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19"
  },
  {
    "title": "Sr. Java Developer/Lead _FTE_ Fort Worth, TX",
    "company_name": "BURGEON IT SERVICES LLC",
    "location": "  Fort Worth, TX   ",
    "via": "via Dice",
    "description": "Hello Consultant,\n\nPlease find the JD and let me know your interest with your updated profile ASAP...\n\nRole : Sr. Java Developer/Lead\n\nDuration: FTE\n\nLocation: Fort Worth, TX (Onsite)\n\nJD:\n• Hands-on in the following:\n• Java 8 / J2EE,\n• Spring boot\n• Gradle/Maven\n• REST API\n• Web Services\n• ORM -hibernate/JPA\n• Unit Testing and Integration Testing- Junit/TestNG\n• Angular 8 and above\n• Reusable Component Development & Publish Angular library\n• Good to have:\n• Hands-on in the following:\n• CI/CD pipeline deployment\n• TDD/BDD testing frameworks (Junit)\n• DB2\n• Kafka\n• HTML CSS 3\n• Responsive Design Bootstrap\n• Angular Socket development\n• ReactJS\n\nThanks & Regards\n• Hari Krishna\nSr. Technical Recruiter\n/\n\nBurgeon IT services ",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "Unit Testing and Integration Testing- Junit/TestNG"
        ]
      },
      {
        "title": "Benefits",
        "items": [
          "Java 8 / J2EE,",
          "Spring boot"
        ]
      }
    ],
    "related_links": [
      {
        "link": "https://www.google.com/search?q=BURGEON+IT+SERVICES+LLC&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCO0L",
        "text": "See web results for BURGEON IT SERVICES LLC"
      }
    ],
    "extensions": [
      "12 hours ago",
      "Full-time",
      "No degree mentioned"
    ],
    "detected_extensions": {
      "posted_at": "12 hours ago",
      "schedule_type": "Full-time"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJTci4gSmF2YSBEZXZlbG9wZXIvTGVhZCBfRlRFXyBGb3J0IFdvcnRoLCBUWCIsImh0aWRvY2lkIjoiMHhqZTVoWDBlaDBBQUFBQUFBQUFBQT09IiwiZmMiOiJFcUlDQ3VJQlFVVnpOMnBPVW1GamFYZEVMVk5YYkdZd1RrRlJUbXRvVjNKWlFqRnVRMk5SYVRoUkxVbDRVVVJUTkU1U1VFcFZURkYzYzBaaFVFY3RVWFpGWlRkVFdqUTJNVnBGUjFSemQzVlBjVUZTU214bk9VTmxORlJRU21sM2FFUkJZV1ZoYlZCb1VrMXJXbUZuYUU1cmRtMVBVR1pZTldadVh6STJRMGgyVTIwM1dqUjJXamN6ZG1odFpHSmxXVlpHWmtweE5VbHRPVFpITkVOelMxSnJTVmxQVmpObVFYZElZa0oyZEhCek5sZHBaMWg2Ym10MWJFeEZWRjgyTVRsaVEyODBUMmRGWkhCNFExVm5hblozYkZsRlYxa3RabGRKVm13MlRtOHdVMk0zVVRjMmR4SVhaVU41VWxwT1JFRklUVXRuTlU1dlVIaDBiVlJ0UVhNYUlrRlBMVEJ5YkRWNExVVlhNRVZFT0ZkaGRIaExkbk5tY1Y5eExXNVVNR2hSVVdjIiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfOSIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBkaXJlY3RseSBvbiBEaWNlIiwibGluayI6Imh0dHBzOi8vd3d3LmRpY2UuY29tL2pvYi1kZXRhaWwvZDUwZDZhMzItN2E2Yi00OTFlLTliMzAtMmVhMTcxMTg3YjgxP3V0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
  },
  {
    "title": "Senior Java Developer",
    "company_name": "Dice",
    "location": "  Des Moines, IA   ",
    "via": "via LinkedIn",
    "description": "Job#: 1355747\n\nJob Description...\n\nApex Systems is looking for a Senior Java Developer in the Des Moines, IA area. This will be a hybrid remote work setting.\n\nResponsibilities:\n• Work as a member of the app dev team to complete software solutions\n• Work with business partners directly to ensure solution requirements\n• Work with business areas to gain strong understanding of product lines\n• Provide application analysis and support for vendor developed apps.\n\nTech Stack:\n• Java\n• JavaScript\n• Angular 11\n• Typescript\n\nEEO Employer\n\nApex Systems is an equal opportunity employer. We do not discriminate or allow discrimination on the basis of race, color, religion, creed, sex (including pregnancy, childbirth, breastfeeding, or related medical conditions), age, sexual orientation, gender identity, national origin, ancestry, citizenship, genetic information, registered domestic partner status, marital status, disability, status as a crime victim, protected veteran status, political affiliation, union membership, or any other characteristic protected by law. Apex will consider qualified applicants with criminal histories in a manner consistent with the requirements of applicable law. If you have visited our website in search of information on employment opportunities or to apply for a position, and you require an accommodation in using our website for a search or application, please contact our Employee Services Department at or .\n\nApex Systems is a world-class IT services company that serves thousands of clients across the globe. When you join Apex, you become part of a team that values innovation, collaboration, and continuous learning. We offer quality career resources, training, certifications, development opportunities, and a comprehensive benefits package. Our commitment to excellence is reflected in many awards, including ClearlyRated's Best of Staffing® in Talent Satisfaction in the United States and Great Place to Work® in the United Kingdom and Mexico",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "Java",
          "JavaScript"
        ]
      },
      {
        "title": "Responsibilities",
        "items": [
          "Work as a member of the app dev team to complete software solutions",
          "Work with business partners directly to ensure solution requirements",
          "Work with business areas to gain strong understanding of product lines",
          "Provide application analysis and support for vendor developed apps"
        ]
      },
      {
        "title": "Benefits",
        "items": [
          "We offer quality career resources, training, certifications, development opportunities, and a comprehensive benefits package"
        ]
      }
    ],
    "related_links": [
      {
        "link": "https://www.google.com/search?q=Dice&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCK8M",
        "text": "See web results for Dice"
      }
    ],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchgwk0qIvqPnMlAcqO5451PRYsMDccWFDcD5pGeE&s",
    "extensions": [
      "3 days ago",
      "Full-time",
      "No degree mentioned"
    ],
    "detected_extensions": {
      "posted_at": "3 days ago",
      "schedule_type": "Full-time"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJTZW5pb3IgSmF2YSBEZXZlbG9wZXIiLCJodGlkb2NpZCI6IklUUUJ3TER4QVRjQUFBQUFBQUFBQUE9PSIsImZjIjoiRXZjQkNyY0JRVVZ6TjJwT1VrbzJlRkF6UjFCS1gyUlVMVkpNTkhWV2FUaFFNVlpZTW5FdE5rd3RkMDFmZFcxSVN6RnVUVXRWYUdWTVpHVjBNbVJ6TFY5eE9FbFBWa05LZGxwbU1uSnFWbTFTTlc5TlZsTlRTVGhqZG10VmVXSTVWbUUwTUhsR0xXVlFOMWRpUWtKalUycENNRWx4WVRSQ1JVNW1OM00yZFhsSFpubHJOVzR4WTNsb1JWaHRORnBFTjFVMmFGaGlWRGt5VkVReWFWTTNia1J3V25CUk1XdEtZbEZtUWtGWU1saExaVlU0TkhSRWJDMWZRMWRKRWhkbFEzbFNXazVFUVVoTlMyYzFUbTlRZUhSdFZHMUJjeG9pUVU4dE1ISnNORlF6YVdjMk9HeGtkbk5KWlU0NFdWUnFXR1pJWnpoQlMyWTVRUSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzEwIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIExpbmtlZEluIiwibGluayI6Imh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9qb2JzL3ZpZXcvc2VuaW9yLWphdmEtZGV2ZWxvcGVyLWF0LWRpY2UtMzYzODkwMDgyOD91dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19"
  },
  {
    "title": "Java DevOps Developer",
    "company_name": "SGA Inc.",
    "location": "  New York, NY   ",
    "via": "via ZipRecruiter",
    "description": "Software Guidance & Assistance, Inc., (SGA), is searching for a Java DevOps Developer for a CONTRACT assignment with one of our premier Financial clients in New York, NY.\n\nThis is not 100% remote - onsite hybrid schedule required...\nNo c2c agencies permitted\n\nResponsibilities:\nThe Global Spread Product Technology organization is looking for a talented professional with strong technical skills to architect and develop innovative solutions using Java technologies within front office risk space. As part of the role, you will collaborate with quants, product development and technology teams to analyze, design, build, continuously refine and enhance technical solutions.\n• Partner with the Quants, Product Development & Technology Teams to architect, design and build highly distributed, low latency and resilient risk technology solutions\n• Collaborate with peer technology teams to drive common architecture and build reusable Microservices and components using industry standard design principles\n• Lead geographically distributed technology teams to own, build and deliver technology solutions from inception to deployment\n• Proactively contribute to stability of overall production systems and troubleshoot key components and processes in complex and highly distributed risk platform\n• Keep track of latest technology trends and proactively learn new technologies driving practical and reference implementations\n• Promote agile test-driven development through implementation of testing framework to support Unit, Component, Integration, End-to End and Load testing\n• Champion adoption of latest standard Dev Ops and secure development practices\n\nRequired Skills:\n• Bachelor's degree/University degree or equivalent experience\n• 6-10 years of experience in Core Java, J2EE, Spring Framework\n• 2+ years of experience in Python scripting and data analysis\n• Experience in building highly scalable and distributed applications using reactive microservices programming on cloud infrastructure\n• Strong expertise in messaging technologies such as gRPC, JMS, Kafka etc\n• Excellent knowledge of Microservices, APIs and Container Technologies such as Docker, Kubernetes, OpenShift, Istio Service Mesh etc.\n• Proficient in latency measurement and performance optimization of Java based platforms with focus on JVM tuning\n• Experience with observability stacks like ELK, Prometheus, Grafana, Kiali, Jaeger etc.\n• Sound knowledge for persistence technologies such as relational databases, NoSQL databases, off heap storages and distributed caches\n• Hands-on knowledge of Linux / Unix\nNice to have: Experience in fast moving Capital Markets Front Office technology environment with working knowledge of Fixed Income productsis a plus. Working with Quants & Technology managers. Not required.\n\nSGA is a technology and resource solutions provider driven to stand out. We are a women-owned business. Our mission: to solve big IT problems with a more personal, boutique approach. Each year, we match consultants like you to more than 1,000 engagements. When we say let's work better together, we mean it. You'll join a diverse team built on these core values: customer service, employee development, and quality and integrity in everything we do. Be yourself, love what you do and find your passion at work. Please find us at https://sgainc.com .\n\nEEO Employer: Race, Color, Sex, Sexual Orientation, Gender Identity, Religion, National Origin, Disability, Veteran Status, Age, Marital Status, Pregnancy, Genetic Information, or Other Legally Protected Status",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "Bachelor's degree/University degree or equivalent experience",
          "6-10 years of experience in Core Java, J2EE, Spring Framework",
          "2+ years of experience in Python scripting and data analysis",
          "Experience in building highly scalable and distributed applications using reactive microservices programming on cloud infrastructure",
          "Strong expertise in messaging technologies such as gRPC, JMS, Kafka etc",
          "Excellent knowledge of Microservices, APIs and Container Technologies such as Docker, Kubernetes, OpenShift, Istio Service Mesh etc",
          "Proficient in latency measurement and performance optimization of Java based platforms with focus on JVM tuning",
          "Experience with observability stacks like ELK, Prometheus, Grafana, Kiali, Jaeger etc",
          "Sound knowledge for persistence technologies such as relational databases, NoSQL databases, off heap storages and distributed caches",
          "Hands-on knowledge of Linux / Unix",
          "Working with Quants & Technology managers"
        ]
      },
      {
        "title": "Responsibilities",
        "items": [
          "As part of the role, you will collaborate with quants, product development and technology teams to analyze, design, build, continuously refine and enhance technical solutions",
          "Partner with the Quants, Product Development & Technology Teams to architect, design and build highly distributed, low latency and resilient risk technology solutions",
          "Collaborate with peer technology teams to drive common architecture and build reusable Microservices and components using industry standard design principles",
          "Lead geographically distributed technology teams to own, build and deliver technology solutions from inception to deployment",
          "Proactively contribute to stability of overall production systems and troubleshoot key components and processes in complex and highly distributed risk platform",
          "Keep track of latest technology trends and proactively learn new technologies driving practical and reference implementations",
          "Promote agile test-driven development through implementation of testing framework to support Unit, Component, Integration, End-to End and Load testing",
          "Champion adoption of latest standard Dev Ops and secure development practices"
        ]
      }
    ],
    "related_links": [
      {
        "link": "http://www.sgainc.com/",
        "text": "sgainc.com"
      },
      {
        "link": "https://www.google.com/search?q=SGA+Inc.&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCPoM",
        "text": "See web results for SGA Inc."
      }
    ],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkhK6hfAWanhU9lOUAMFXGCHVkoCJbAdOTWYkLiA&s",
    "extensions": [
      "4 days ago",
      "70–90 an hour",
      "Full-time"
    ],
    "detected_extensions": {
      "posted_at": "4 days ago",
      "schedule_type": "Full-time",
      "salary": "70–90 an hour"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJKYXZhIERldk9wcyBEZXZlbG9wZXIiLCJodGlkb2NpZCI6InY3eWNIUHV0aHJNQUFBQUFBQUFBQUE9PSIsImZjIjoiRXZjQkNyY0JRVVZ6TjJwT1UwSmxlamN4TXprMlNHbG5aRVJGZVhOWFdIVTVlV3BTYkZGa1VsRTJYMDR3YkhsU1FsQjZPVkJuU1dNd1NsOU9hak5tWWxWUlZGWnhkVzFpZVRsaGVHaGFaakUwVVRGSVJUTXhaMVJrU1hOTlgwOUpWRU5rUW5Kc2MzVjBZek5hT0ZWV2FWZEphVVJ6ZUVNeGNsVm1RVFZMTldVMVltNDROSEJ6UVhCcVNGbGpSR2RhTVd0MldtdGhOMUkzYlhWSWRWWnZWRWN6TXpBNFFuQkplV3QzTnkxRE0xVkhYMGx3TmpCS1ltZFNWV3R2RWhkbFEzbFNXazVFUVVoTlMyYzFUbTlRZUhSdFZHMUJjeG9pUVU4dE1ISnNOMU5WVFdGeGMzRndha0ZJY0hoc2FFdGlUMjloYUZrMFFraGZRUSIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzEyIiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IGRpcmVjdGx5IG9uIFppcFJlY3J1aXRlciIsImxpbmsiOiJodHRwczovL3d3dy56aXByZWNydWl0ZXIuY29tL2MvU0dBLUluYy4vSm9iL0phdmEtRGV2T3BzLURldmVsb3Blci8taW4tTmV3LVlvcmssTlk/amlkPTYwMWRlZWQ5Nzc5MWZmMjdcdTAwMjZ1dG1fY2FtcGFpZ249Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fc291cmNlPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX21lZGl1bT1vcmdhbmljIn19"
  },
  {
    "title": "Entry Level Java Developer",
    "company_name": "SynergisticIT",
    "location": "  Naperville, IL   ",
    "via": "via ZipRecruiter",
    "description": "Job Description\n\nJob Description SYNERGISTICIT wants every candidate to know that the Job Market is Challenging and to stand out you need to have exceptional skills and technologies that's where we come in to make sure you get the attention that you need...\n\nWe are looking for candidates wanting to file H1b visa\nPosition open for all visa holders and US citizens\n\nWe at Synergisticit understand the problem of the mismatch between employer's requirements and Employee skills and that's why since 2010 we have helped thousands of candidates get jobs at technology clients like apple, google, Paypal, western union, Client, visa, Walmart labs, etc to name a few.\n\nWe have an excellent reputation with the clients. Currently, We are looking for entry-level software programmers, IT enthusiasts, Java developers.\n\nWho Should Apply? Recent IT Graduates looking to make their careers in IT Industry Candidates having basic knowledge or with one or two years of experience in JAVA, C++, Core JAVA.\n\nWe welcome candidates with all visas and citizens to apply.\n\nWe assist in filing for STEM extension and also for H1b and Green card filing to Candidates looking to upskill/enhance their IT skills.\n\nCandidates who are serious about their future in the IT Industry and have set big goals for themselves.\n\nCandidates having difficulty in finding jobs or cracking interviews or who want to improve their skill portfolio. We also offer Skill enhancement programs if the candidates are missing skills or experience that our clients need with great outcomes\n\nCandidates can benefit from skill enhancement if they fall into the below categories. If they are qualified with enough skills then no need for skill enhancement\n\nCandidates who Lack Experience\nHave had a break in careers\nLack Technical Competency\nDifferent visa candidates who want to get employed and settle down in the USA\n\nplease also check the below links\nhttps://www.synergisticit.com/candidate-outcomes/\nhttps://www.synergisticit.com/java-track/\nhttps://www.synergisticit.com/data-science-track/\n\nhttps://www.synergisticit.com/blog/\nREQUIRED SKILLS\n• Bachelor's degree or Masters's degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT\n• Highly motivated, self-learner, and technically inquisitive\n• Experience in the programming language Java and understanding of the software development life cycle\n• Knowledge of Core Java, javascript , C++, or software programming\n• Excellent written and verbal communication skills\nPreferred skills: knowledge of Spring Boot, microservices\n\nPlease understand skills are required by clients for selection even if it's a Junior or entry-level position the additional skills are the only way a candidate can be picked by clients.\nNo third-party candidates or c2c candidates\nTo apply for this position, please apply to the posting\n\nNo phone calls please. Shortlisted candidates would be reached out",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "Recent IT Graduates looking to make their careers in IT Industry Candidates having basic knowledge or with one or two years of experience in JAVA, C++, Core JAVA",
          "Different visa candidates who want to get employed and settle down in the USA",
          "Bachelor's degree or Masters's degree in Computer Science, Computer Engineering, Electrical Engineering, Information Systems, IT",
          "Highly motivated, self-learner, and technically inquisitive",
          "Experience in the programming language Java and understanding of the software development life cycle",
          "Knowledge of Core Java, javascript , C++, or software programming",
          "Excellent written and verbal communication skills",
          "Please understand skills are required by clients for selection even if it's a Junior or entry-level position the additional skills are the only way a candidate can be picked by clients"
        ]
      }
    ],
    "related_links": [
      {
        "link": "https://www.google.com/search?q=SynergisticIT&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCLsN",
        "text": "See web results for SynergisticIT"
      }
    ],
    "extensions": [
      "75K–150K a year",
      "Full-time"
    ],
    "detected_extensions": {
      "schedule_type": "Full-time",
      "salary": "75K–150K a year"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJFbnRyeSBMZXZlbCBKYXZhIERldmVsb3BlciIsImh0aWRvY2lkIjoiSDFSUTcxYXlKU1lBQUFBQUFBQUFBQT09IiwiZmMiOiJFdmNCQ3JjQlFVVnpOMnBPVTJGak4yMXdjblZGV1hGaVoxWktjSFJPTFdGeWIwRkZObk5SZVRWYU5tMDVVVXBvT1ZWb1UwdFhlSGg0UzNCUFFUVjZkMUJMWjJWc01rMW1UVkI1UXpaelZWQnNRVm8wWjBsSk5EZHBPR3huVjJsTGN6aHFWVmgzV0hRNVdscEVaV1ZKYUVGSlR6Um5aRnBMWkhkZmFuTTJNV2RPUTNBNWMzRk9UM0JtU0VGZldIQm5SakpsZGxKR1ZtVTNaek5VTWpnMGFsbHpNVzF6WTBkV2JERmxhM0o0VkhwckxUUlNhRlptV25RMVFqRTRFaGRsUTNsU1drNUVRVWhOUzJjMVRtOVFlSFJ0VkcxQmN4b2lRVTh0TUhKc05GRTRhazU0WDNjNFFWUmxVa0pQTUMxek9IaExRekU0VGpaNlp3IiwiZmN2IjoiMyIsImZjX2lkIjoiZmNfMTQiLCJhcHBseV9saW5rIjp7InRpdGxlIjoiQXBwbHkgb24gWmlwUmVjcnVpdGVyIiwibGluayI6Imh0dHBzOi8vd3d3LnppcHJlY3J1aXRlci5jb20vYy9TeW5lcmdpc3RpY0lUL0pvYi9FbnRyeS1MZXZlbC1KYXZhLURldmVsb3Blci8taW4tTmFwZXJ2aWxsZSxJTD9qaWQ9MDdiNTM3NGJjNmUxZWZkN1x1MDAyNnV0bV9jYW1wYWlnbj1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9zb3VyY2U9Z29vZ2xlX2pvYnNfYXBwbHlcdTAwMjZ1dG1fbWVkaXVtPW9yZ2FuaWMifX0="
  },
  {
    "title": "Sr Java Developer",
    "company_name": "Software Guidance & Assistance",
    "location": "  Richmond, VA   ",
    "via": "via Dice",
    "description": "Software Guidance & Assistance, Inc., (SGA), is searching for a Sr Java Developer for a CONTRACT assignment with one of our premier Financial clients in Richmond, VA.\n\nResponsibilities ...\nDevelop products and services on the latest technologies through contributions in development, enhancements, testing and implementation.\nInnovate and evaluate new technology solutions and functionalities to support future business needs.\nWork on migrating applications from an on-premises location to the cloud service providers.\nDevelop, modify, extend code for building cloud infrastructure, and automate using CI/CD pipeline.\nPartners with business and peers in the pursuit of solutions that achieve business goals through an agile software development methodology.\nPerform problem analysis, data analysis, reporting and communication.\nWork with peers across the system to define and implement best practices and standards.\nAssess applications and help determine the appropriate application infrastructure patterns.\nUse best practices and knowledge of internal or external drivers to improve products or services.\n\nRequired Skills:\nAt least 5 years of strong experience in core JAVA coding skills.\n5 years application development experience with J2EE and Spring.\nExperience in securing applications using SAML2 with Spring Boot and Spring Security\nExperience in securing applications using OAUth2 with Spring Boot and Spring Security\nExperience with configuring and testing SAP Business Objects and Tableau reporting tools authentication and authorization\nHands on experience with cloud services including planning, development, migration, and integration of applications and Cloud services.\nFamiliarity with application modernization approaches including containerization, API's, and microservices.\nExperience with the implementation of CI/CD pipelines using DevOps and automated testing.\nProficiency in implementing cloud-native microservices in AWS cloud environments is strongly preferred.\nExperience with REST APIs. Writing RESTful Web services (Spring REST preferred); using Web frameworks, such as Spring MVC; in multi-threaded and core Java programming; shell scripting.\nExperience with WebSphere, WebLogic, or other application container\nExperience using Oracle as well as a knowledge of back-end PL/SQL script development.\nExperience in front end development skills using Angular.\nExperience using Web UI Debugging tools (firebug, chrome dev tools, windows script debugger, etc.).\nExpert in user interface development, engineering cross-browser, cross device compliant code.\nExperience in Bootstrap, Type Script, HTML5, and CSS.\nApplication development experience with Spring, Hibernate, SQL, JUnit, J2EE, Maven, JAXB, JSON, XML, Micro services and log4J2. Experience with REST APIs, Mini Services, Cloud, Develops\nExperience in securing applications with Okta using SAML2.\nSGA is a technology and resource solutions provider driven to stand out. We are a women-owned business. Our mission: to solve big IT problems with a more personal, boutique approach. Each year, we match consultants like you to more than 1,000 engagements. When we say let's work better together, we mean it. You'll join a diverse team built on these core values: customer service, employee development, and quality and integrity in everything we do. Be yourself, love what you do and find your passion at work. Please find us at .\n\nEEO Employer: Race, Color, Sex, Sexual Orientation, Gender Identity, Religion, National Origin, Disability, Veteran Status, Age, Marital Status, Pregnancy, Genetic Information, or Other Legally Protected Status",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "At least 5 years of strong experience in core JAVA coding skills",
          "5 years application development experience with J2EE and Spring",
          "Experience in securing applications using SAML2 with Spring Boot and Spring Security",
          "Experience with configuring and testing SAP Business Objects and Tableau reporting tools authentication and authorization",
          "Hands on experience with cloud services including planning, development, migration, and integration of applications and Cloud services",
          "Familiarity with application modernization approaches including containerization, API's, and microservices",
          "Experience with the implementation of CI/CD pipelines using DevOps and automated testing",
          "Experience with WebSphere, WebLogic, or other application container",
          "Experience using Oracle as well as a knowledge of back-end PL/SQL script development",
          "Experience in front end development skills using Angular",
          "Experience using Web UI Debugging tools (firebug, chrome dev tools, windows script debugger, etc.)",
          "Expert in user interface development, engineering cross-browser, cross device compliant code",
          "Experience in Bootstrap, Type Script, HTML5, and CSS",
          "Application development experience with Spring, Hibernate, SQL, JUnit, J2EE, Maven, JAXB, JSON, XML, Micro services and log4J2",
          "Experience with REST APIs, Mini Services, Cloud, Develops"
        ]
      },
      {
        "title": "Responsibilities",
        "items": [
          "Develop products and services on the latest technologies through contributions in development, enhancements, testing and implementation",
          "Innovate and evaluate new technology solutions and functionalities to support future business needs",
          "Work on migrating applications from an on-premises location to the cloud service providers",
          "Develop, modify, extend code for building cloud infrastructure, and automate using CI/CD pipeline",
          "Partners with business and peers in the pursuit of solutions that achieve business goals through an agile software development methodology",
          "Perform problem analysis, data analysis, reporting and communication",
          "Work with peers across the system to define and implement best practices and standards",
          "Assess applications and help determine the appropriate application infrastructure patterns",
          "Use best practices and knowledge of internal or external drivers to improve products or services"
        ]
      }
    ],
    "related_links": [
      {
        "link": "http://www.sgainc.com/",
        "text": "sgainc.com"
      },
      {
        "link": "https://www.google.com/search?q=Software+Guidance+%26+Assistance&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCIUO",
        "text": "See web results for Software Guidance & Assistance"
      }
    ],
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5_fc-n6EWSJGGVSfyqmpM1hXHNUeeJsFNm9RGXc&s",
    "extensions": [
      "5 days ago",
      "Contractor",
      "No degree mentioned"
    ],
    "detected_extensions": {
      "posted_at": "5 days ago",
      "schedule_type": "Contractor"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJTciBKYXZhIERldmVsb3BlciIsImh0aWRvY2lkIjoiQ0FPVFlMRFpZcmtBQUFBQUFBQUFBQT09IiwiZmMiOiJFb3dDQ3N3QlFVVnpOMnBPVkVjMVZISjFUbE5tV1dGM2NGbHJaM0UxYzNwR2FreGZSMm94TUhOd1ltcDZRMHB5YlY5V2VIazJla05DZFhaMU1qSXhjWFpUZUVOck9XWTVOa3AzZVUwMVNHTjNTMGRJV2xOak5teDVWRkpwVFU5cVdVazNjVEZXWjA5Q1NuWjJaWEJvTFRsTVJtVlZSbkp5TkhGR1REaFVMVU54VjB4cmRteFlORkp6UlV0MVNHeDFhVWxaYVZGUlgyZFRTalozUTFaTGJWSk1aRGxSU0dGM1oxaDBVVkUxVG1Sd1QwdFdWR2cyTFVkVlJYSmhjbXR4ZUVSaWJsRkplRFpuZWxwUFozSmpWV3B6RWhkbFEzbFNXazVFUVVoTlMyYzFUbTlRZUhSdFZHMUJjeG9pUVU4dE1ISnNOR1pVV0ZWVmJHMTVVVVZaVkdGV1pHeERXR04xTmpoTU9FRnhadyIsImZjdiI6IjMiLCJmY19pZCI6ImZjXzE1IiwiYXBwbHlfbGluayI6eyJ0aXRsZSI6IkFwcGx5IG9uIERpY2UiLCJsaW5rIjoiaHR0cHM6Ly93d3cuZGljZS5jb20vam9iLWRldGFpbC9kNGM1MjExMS04ZWRhLTRlOGMtOTkxMi1iODBkNTA1OWVhMDM/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ=="
  },
  {
    "title": "Java Developer AVP - Cloud Technologies",
    "company_name": "Barclays",
    "location": "  Hanover, NJ   ",
    "via": "via Barclays Careers",
    "description": "Developer\nWhippany, NJ\n...\nAs a Barclays Developer, you will work with the development manager and project manager to agreed release schedules and development and coding of the MOTIF in-flight projects. You will be responsible for technical analysis, development, and testing, primarily in Java and Linux, but with opportunities to work in other technologies. You will play a leading role in a strategic project to deliver a market leading initiative. You will also be expected to contribute towards ongoing support of the production environment.\n\nBarclays is one of the world's largest and most respected financial institutions, with 329 years of success, quality, and innovation behind us. We've helped millions of individuals and businesses thrive, creating financial and digital solutions that the world now takes for granted. An important and growing presence in the USA, we offer careers providing endless opportunity.\n\nWorking Flexibly\n\nWe’re committed to providing a supportive and inclusive culture and environment for you to work in. This environment recognizes and supports ways to balance your personal needs, alongside the professional needs of our business. Providing the opportunity for all our employees, globally to work flexibly empowers each of us to work in a way that suits our lives as well as enabling us to better service our customers’ and clients’ needs. Whether you have family commitments or you’re a career, or whether you need study time or wish to pursue personal interests, our approach to working flexibly is designed to help you balance your life.\n\nWe are currently in the early stages of implementing a hybrid working environment, which means that many colleagues spend part of their working hours at home and part in the office, depending on the nature of the role they are in. We’re flexible on how this works and it may continue to change and evolve. Depending on your team, typically this means that colleagues spend a minimum of between 20% to 60% of their time in the office, which could be over a week, a month, or a quarter. However, some colleagues may choose to spend more time in the office over a typical period than their role type requires. We also have a flexible working process where, subject to business needs, all colleagues globally can request work patterns to reflect their personal circumstances\n\nPlease discuss the detail of the working pattern options for the role with the hiring manager.\nWhat will you be doing?\n\n• Maintaining high quality of deliverables\n• Following the adoption of Agile techniques\n• Working closely with the technical team lead to provide feedbacks on the technical design and understand the implementation of it\n• Working with business users to capture/analyze the business requirements and translate them into technical requirements\n• Designing & developing of JAVA/ORACLE environment\n• Ensuring code written meets the predefined company and department standards\n• Performing basic tuning to ensure acceptable application performance\n• Preparing of detailed unit test cases\n\nWhat we’re looking for:\n\n• Bachelor /Master’s Degree in Technology or Equivalent\n• Experience of working with Java micro-services\n• Experience of working in Unix/Linux platform\n• Experience of working with Oracle database\n\nSkills that will help you in the role:\n\n• Experience in working on a major IT project with SOA integration with various back-end technologies (JAVA) and using the following technologies: JAVA, XML, JUnit, JDBC, etc\n• Experience of working with business user tools, such as TABLAEU, EXCEL MACROS, SQL\n• Experience of working with agile software development\n• Experience of working on a sub-ledger application\n\nWhere will you be working?\n\nAt Barclays, we are proud to be redefining the future of finance and here at Whippany we are defining the future of the workplace and the future of the way we work and live. We are creating a unique community, one of four strategic tech-enabled hubs that will redefine opportunity for everyone who works here. Whatever you do at Whippany, you’ll have every chance to build a world-class career in this world-class environment.\n\n#LI-Hybrid #Software",
    "job_highlights": [
      {
        "title": "Qualifications",
        "items": [
          "Bachelor /Master’s Degree in Technology or Equivalent",
          "Experience of working with Java micro-services",
          "Experience of working in Unix/Linux platform",
          "Experience of working with Oracle database",
          "Experience in working on a major IT project with SOA integration with various back-end technologies (JAVA) and using the following technologies: JAVA, XML, JUnit, JDBC, etc",
          "Experience of working with business user tools, such as TABLAEU, EXCEL MACROS, SQL",
          "Experience of working with agile software development",
          "Experience of working on a sub-ledger application"
        ]
      },
      {
        "title": "Responsibilities",
        "items": [
          "As a Barclays Developer, you will work with the development manager and project manager to agreed release schedules and development and coding of the MOTIF in-flight projects",
          "You will be responsible for technical analysis, development, and testing, primarily in Java and Linux, but with opportunities to work in other technologies",
          "You will play a leading role in a strategic project to deliver a market leading initiative",
          "You will also be expected to contribute towards ongoing support of the production environment",
          "Depending on your team, typically this means that colleagues spend a minimum of between 20% to 60% of their time in the office, which could be over a week, a month, or a quarter",
          "Maintaining high quality of deliverables",
          "Following the adoption of Agile techniques",
          "Working closely with the technical team lead to provide feedbacks on the technical design and understand the implementation of it",
          "Working with business users to capture/analyze the business requirements and translate them into technical requirements",
          "Designing & developing of JAVA/ORACLE environment",
          "Ensuring code written meets the predefined company and department standards",
          "Performing basic tuning to ensure acceptable application performance",
          "Preparing of detailed unit test cases"
        ]
      }
    ],
    "related_links": [
      {
        "link": "https://www.barclays.com/",
        "text": "barclays.com"
      },
      {
        "link": "https://www.google.com/search?q=Barclays&sa=X&ved=0ahUKEwjQ3MTmgtH_AhVCEFkFHcbsBLMQmJACCM4O",
        "text": "See web results for Barclays"
      }
    ],
    "extensions": [
      "Full-time"
    ],
    "detected_extensions": {
      "schedule_type": "Full-time"
    },
    "job_id": "eyJqb2JfdGl0bGUiOiJKYXZhIERldmVsb3BlciBBVlAgLSBDbG91ZCBUZWNobm9sb2dpZXMiLCJodGlkb2NpZCI6Inp0TUo2Q1ZkN3AwQUFBQUFBQUFBQUE9PSIsImZjIjoiRW93Q0Nzd0JRVVZ6TjJwT1UzUmhNeTFCZVVjNVJWbG9TbnA1YjI5NU9VYzNSMkZPVG1jME9UUlRjRVV0TTNaSVRrbHZWakZQTlMxSWMyNVlZemhaWlZKVE1UaHdVbTEwYVZsemRqaHBOSGRxYUY5T2FtTmxkazVWVDI0eVFXUkRXVU4xWDBnMVNsTmFlbkY1YnpaYVltcHZSRm96TlZKWVNtZHlVVmR1VW1nemRVTlFhVjl4VFVsTmVYRlZYMUZwTTBwcFpEZFJlR3QzVEZZeFR6VnZUR00yVTJ0Tk5UZGhNbTFIZVRrMFJubFRkMWxYTlVwV09EZzNlR3hzV2pNMk9GQkVZMHR4Y1VsNlFVZGxVREZsUVhKZkVoZGxRM2xTV2s1RVFVaE5TMmMxVG05UWVIUnRWRzFCY3hvaVFVOHRNSEpzTlZkaFJUQnFjV3RxZWpaU2RYSlJSazl3U3kxd2JGaFFOVmxvVVEiLCJmY3YiOiIzIiwiZmNfaWQiOiJmY18xNyIsImFwcGx5X2xpbmsiOnsidGl0bGUiOiJBcHBseSBvbiBCYXJjbGF5cyBDYXJlZXJzIiwibGluayI6Imh0dHBzOi8vc2VhcmNoLmpvYnMuYmFyY2xheXMvam9iL3doaXBwYW55L2phdmEtZGV2ZWxvcGVyLWF2cC1jbG91ZC10ZWNobm9sb2dpZXMvMTMwMTUvNDUyNTQzNTg5NzY/dXRtX2NhbXBhaWduPWdvb2dsZV9qb2JzX2FwcGx5XHUwMDI2dXRtX3NvdXJjZT1nb29nbGVfam9ic19hcHBseVx1MDAyNnV0bV9tZWRpdW09b3JnYW5pYyJ9fQ=="
  }
];

function JobPage() {
  const [jobResults, setJobResults] = useState(testData);
  const [offset, setOffset] = useState(0);


  const search = ({ genericSearchText, locationSearchText, fulltimeOnly }) => {
    console.log("Searching for:", genericSearchText, " @", locationSearchText, " and full time only: ", fulltimeOnly)

    // axios.get(`https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=${genericSearchText}&location=${locationSearchText}&start=${offset}&api_key=64d6fcdf8161678935df1bc459aca0b9a5c1c075b31a9cdea28f83993ada40c0`)
    // .then(results => setJobResults(results.data.jobs_results))
    // .catch(error =>console.error(error));
  }

  return (
    <>
      {console.log(jobResults)}
      <Header />
      <Filter searchCB={search} />

      <Container sx={{ marginTop: "35px" }}>
        <Grid container rowSpacing={8} columnSpacing={4}>
          {jobResults.map(job => (
            <Grid item key={job.job_id} xs={12} sm={6} md={4}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>


      </Container>

      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: "70px"
        }}
      >
        <Button variant="contained">Load More</Button>

      </Container>




    </>
  );
}






const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: "#5964E0"
        },
        secondary: {
          main: "#939BF4"
        },
        background: {
          default: "#FFFFFF",
          paper: "#F4F6F8",
        },
        divider: 'rgba(110, 128, 152, 0.2)',
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: "#5964E0"
        },
        secondary: {
          main: "#939BF4"
        },
        divider: 'rgba(110, 128, 152, 0.2)',
        background: {
          default: "#121721",
          paper: "#19202D",
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
});

export default function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <JobPage />

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

