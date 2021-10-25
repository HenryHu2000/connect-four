import React, {ReactElement, useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {BASENAME} from '../globals';
import Experience from './experience/Experience';

import './Profile.scss';
import {ButtonState} from './types';

const Profile = (): ReactElement => {
  const allInactiveState : ButtonState 
    = {home: false, education: false, skills: false, experience: false, projects: false};
  const [buttonState, setbuttonState] 
    = useState<ButtonState>({...allInactiveState, home: true});
  const makeActive = (id: 'home' | 'education' | 'skills' | 'experience' | 'projects'): void => {
    const newState = {...allInactiveState};
    newState[id] = true;
    setbuttonState(newState);
  };

  return (
    <div className="Profile">
      <Navbar className="navbar navbar-inverse" collapseOnSelect expand="md" variant="dark">
        <Container className="container-fluid">
          <Navbar.Brand className="navbar-brand" href="#">Haowei Hu</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav navbar-nav">
              <Nav.Link className={`nav-link ${buttonState.home ? 'active' : ''}`} id="homeBtn" href="#" onClick={() => makeActive('home')}>Home</Nav.Link>
              <Nav.Link className={`nav-link ${buttonState.education ? 'active' : ''}`} id="educationBtn" href="#education" onClick={() => makeActive('education')}>Education</Nav.Link>
              <Nav.Link className={`nav-link ${buttonState.skills ? 'active' : ''}`} id="skillsBtn" href="#skills" onClick={() => makeActive('skills')}>Skills</Nav.Link>
              <Nav.Link className={`nav-link ${buttonState.experience ? 'active' : ''}`} id="experienceBtn" href="#experience" onClick={() => makeActive('experience')}>Experience</Nav.Link>
              <Nav.Link className={`nav-link ${buttonState.projects ? 'active' : ''}`} id="projectsBtn" href="#projects" onClick={() => makeActive('projects')}>Projects</Nav.Link>
              <Nav.Link className="nav-link" href={`${BASENAME}/connect-four.html`}>Connect 4</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <div className="profile-header jumbotron">
          <div className="container text-center">
            <h1><strong>Haowei Hu</strong></h1>
            <p>Computing Student at Imperial College London</p>
            <p>
              <a href="mailto:haowei.hu19@imperial.ac.uk">haowei.hu19@imperial.ac.uk</a> | <a href="https://www.linkedin.com/in/haowei-hu" target="_blank">www.linkedin.com/in/haowei-hu</a>
            </p>
          </div>
        </div>
        <div className="profile-body container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6" id="education">
              <section>
                <h2>Education</h2>
                <p><strong>2019 – 2023 MEng Computing, Imperial College London</strong></p>
                <ul>
                  <li>
                    Modules: Programming (Haskell/Java/C), Computer Architecture, Databases,
                    Graphs and Algorithms, Program Reasoning, Software Engineering Design, 
                    Models of Computation, Operating Systems, Networks, Compilers, Mathematics,
                    Discrete Mathematics, Logic, Statistics
                  </li>
                  <li>Year 1 total: 77.56; Year 2 total: 78.90 (at First-Class Honours level)</li>
                </ul>
                <p><strong>2015 - 2019 Shenzhen College of International Education, China</strong></p>
                <ul>
                  <li>A-levels: Further Maths (A*), Maths (A*), Physics (A*), Chemistry (A*)</li>
                </ul>
                <p><strong>2017 Stanford High School Summer College, United States</strong></p>
                <ul>
                  <li>
                    CS106B Programming Abstraction (A), CS193C Client-side Technologies (A), MS&E52 Introduction to
                    Decision Making (A+)
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-xs-12 col-md-6" id="skills">
              <section>
                <h2>Skills</h2>
                <p><strong>Technical skills:</strong></p>
                <ul>
                  <li>Back-end: Java, Kotlin, C, C++, Go, Python, SQL, MongoDB, Redis, Protobuf</li>
                  <li>Front-end: HTML5, CSS, Sass, JS, TypeScript, Node, React, Vue, jQuery, Bootstrap</li>
                  <li>
                    Enterprise frameworks: Spring Boot and MVC, MicroProfile (Quarkus), JPA 
                    (Spring Data), CDI (Weld) and JAX-RS (RESTEasy)
                  </li>
                  <li>Configuring CentOS Linux and Docker for microservices</li>
                  <li>
                    Applying Test-driven Development using unit test suites and continuous 
                    integration in DevOps to solve problems empirically
                  </li>
                  <li>Implementing agile development methodologies and using Trello and Jira boards</li>
                </ul>
                <p><strong>Language skills:</strong></p>
                <ul>
                  <li>Trilingual: English (proficient), Chinese (native), Japanese (intermediate)</li>
                  <li>Worked in multiple countries and can relate to a diverse global customer base</li>
                </ul>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6" id="experience">
              <section>
                <h2>Experience</h2>
                <Experience 
                  title="Jul 2021 – Sept 2021. Software Developer Intern, Automation Consultants Ltd."
                >
                  <ul>
                    <li>
                      Developed the board overview feature for the Approvals for Trello power-up, 
                      installed on 25,000+ boards, to give users a centralised view of approval statuses
                    </li>
                    <li>
                      Completed the Approvals for Monday.com app and worked on its initial release
                    </li>
                    <li>
                      Made a detailed outline for the training app, demonstrate holistic thinking
                    </li>
                    <li>
                      Used technologies including React, JavaScript, TypeScript, CSS, Sass
                    </li>
                  </ul>
                </Experience>
                <Experience 
                  title="Apr 2021. Back-End Developer Intern, Tencent Holdings Ltd."
                >
                  <ul>
                    <li>
                      Worked on a QQ group chat management system and implemented the 
                      functionality of asynchronously sending group announcements
                    </li>
                    <li>
                      Worked on a game marketing system, with millions of users, for paying gamers to 
                      promote games using a QQ mini program
                    </li>
                    <li>
                      Made a detailed outline for the training app, demonstrate holistic thinking
                    </li>
                    <li>
                      Used technologies including Go, Protobuf, MySQL, MongoDB, Redis, Kafka
                    </li>
                  </ul>
                </Experience>
                <Experience 
                  title="Oct 2020 – Mar 2021. Undergraduate Teaching Assistant, Imperial College London"
                >
                  <ul>
                    <li>
                      Work 6 hours a week to assist Year 1 students with coding in Haskell, Java and C, 
                      showing the ability to teach and explain and passion for helping others
                    </li>
                  </ul>
                </Experience>
                <Experience 
                  title="Aug 2016 – Jun 2019. Founder and President, Minecraft Technology Club"
                >
                  <ul>
                    <li>
                      Taught 25+ members Java programming, logic circuit and building design, 
                      showing leadership and ability of teaching and explaining
                    </li>
                    <li>
                      Divided the club into Departments, demonstrating management skill
                    </li>
                    <li>
                      Held Minecraft building and programming competitions
                    </li>
                  </ul>
                </Experience>
              </section>
            </div>
            <div className="col-xs-12 col-md-6" id="projects">
              <section>
                <h2>Projects</h2>
                <Experience 
                  title="May 2021 – Jun 2021. Leading Member, TutorMe Online Tutoring App Project"
                >
                  <ul>
                    <li>Designed the architecture with Vue for frontend and Spring Boot for backend</li>
                    <li>Set up DevOps pipeline and auto-deployment with GitHub Actions and Heroku</li>
                    <li>Assigned works according to members’ talents to promote their strengths</li>
                    <li>Developed the signup/login system and homework and attachment features</li>
                  </ul>
                </Experience>
                <Experience 
                  title="Jul 2020 – Sep 2020. Sole Developer, WeChat Mini Program MiniCard Project"
                >
                  <ul>
                    <li>A WeChat Mini Program for sharing digital business cards</li>
                    <li>
                      Divided the software into well-structured components according to the Divide 
                      and Conquer principle, demonstrating structured thinking
                    </li>
                    <li>Developed the backend both on Spring and MicroProfile (Quarkus) in Java</li>
                    <li>Developed the frontend using Vue.js with the WeChat API</li>
                  </ul>
                </Experience>
                <Experience 
                  title="Jun 2018 – Aug 2018. Sole Developer, Vocabulary Learning App KantanMemo Project"
                >
                  <ul>
                    <li>
                      Started out of a personal need of learning Japanese, showing practicality and 
                      ability to apply technology for problem-solving
                    </li>
                    <li>
                      Realised the need for this app because there was no similar app in China, 
                      showing the ability to identify innovations and commercial awareness
                    </li>
                    <li>Used Ebbinghaus’s curve creatively, demonstrating abstract thinking</li>
                    <li>Worked a month consecutively, showing motivation and passion for technology</li>
                  </ul>
                </Experience>
              </section>
            </div>
          </div>
          <br />
          <p className="text-center">References available on request</p>
        </div>
      </main>
      <footer className="container-fluid text-center">
      </footer>
    </div>
  );
};

export default Profile;
