import Typewriter from 'typewriter-effect';
import Head from 'next/head';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import Card from '../components/Card';
import Modal from '../components/Modal';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [
        'web development',
        'design',
        'distributed systems',
        'teaching',
        'open source',
      ],
      position: 0,
      lit_modal_visible: false,
      pennbook_modal_visible: false,
      photogram_modal_visible: false,
      website_modal_visible: false,
      carbon_modal_visible: false,
      spades_modal_visible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      position: scrolled,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      position: scrolled,
    });
  };

  lit_modal_handler = (e) => {
    e.preventDefault();
    this.setState({
      lit_modal_visible: !this.state.lit_modal_visible,
    });
  };

  pennbook_modal_handler = (e) => {
    e.preventDefault();
    this.setState({
      pennbook_modal_visible: !this.state.pennbook_modal_visible,
    });
  };

  photogram_modal_handler = (e) => {
    e.preventDefault();
    this.setState({
      photogram_modal_visible: !this.state.photogram_modal_visible,
    });
  };

  carbon_modal_handler = (e) => {
    e.preventDefault();
    this.setState({
      carbon_modal_visible: !this.state.carbon_modal_visible,
    });
  };

  website_modal_handler = (e) => {
    e.preventDefault();
    this.setState({
      website_modal_visible: !this.state.website_modal_visible,
    });
  };

  spades_modal_handler = (e) => {
    e.preventDefault();
    this.setState({
      spades_modal_visible: !this.state.spades_modal_visible,
    });
  };

  render() {
    return (
      <div className="background">
        <Head>
          <title>Tirtha Kharel</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main>
          <div className="fixed-sidebar">
            <ul id="icon-list">
              <li>
                <a
                  className="icon-link"
                  href="http://github.com/tirthakharel"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} width="30px" />
                </a>
              </li>
              <li>
                <a
                  className="icon-link"
                  href="http://linkedin.com/in/tirthakharel"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} width="30px" />
                </a>
              </li>
              <li>
                <a
                  className="icon-link"
                  href="mailto:tkharel@seas.upenn.edu"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faAt} width="30px" />
                </a>
              </li>
              <li>
                <a className="icon-link" href="/resume" target="_blank">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    width="30px"
                    height="30px"
                  />
                </a>
              </li>
            </ul>
          </div>
          <section id="top">
            <div className="top-info-container">
              <p className="pre-title">hi! my name is</p>
              <h1>tirtha kharel</h1>
              <p className="post-title">
                i am a computer science student at the{' '}
                <a
                  className="title-link"
                  href="http://upenn.edu"
                  target="_blank"
                >
                  university of pennsylvania
                </a>{' '}
                with a passion for <br className="post-title-break" />
                <Typewriter
                  options={{
                    strings: this.state.words,
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    wrapperClassName: 'typing-effect',
                  }}
                />
              </p>
              <div className="button-row">
                <a href="#about">
                  <button>
                    about{' '}
                    <svg
                      className="arrow"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5H9M9 5L4.5 1M9 5L4.5 9"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </a>
                <a href="#experience">
                  <button>
                    experience{' '}
                    <svg
                      className="arrow"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5H9M9 5L4.5 1M9 5L4.5 9"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </a>
                <a href="#projects">
                  <button>
                    projects{' '}
                    <svg
                      className="arrow"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5H9M9 5L4.5 1M9 5L4.5 9"
                        stroke="black"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className="top-img-container">
              <img width="339px" src="/my-face2.png" alt="my face" />
            </div>
          </section>
          <section id="about">
            <Fade top cascade>
              <div className="about-info-container">
                <div className="about-info-title">
                  <h2>about</h2>
                </div>
                <p>
                  I am currently a senior (expected graduation May 2022)
                  pursuing an M.S.E. in Computer Science along with a B.S.E. in
                  Computer Science with a concentration in Data Science. I enjoy
                  designing and creating meaningful products that provide a
                  great experience to users.
                </p>
                <p>
                  {' '}
                  I always look forward to learning new ideas and I'm constantly
                  looking for ways to improve my work.{' '}
                  <br className="about-info-br" />
                  <a
                    target="_blank"
                    href="mailto:tkharel@seas.upenn.edu?subject=[TKharel Designs] Business Inquiry"
                  >
                    Let's create something together.
                  </a>
                </p>{' '}
                <p>
                  {' '}
                  When I’m not working on something new, you can find me
                  teaching, practicing guitar, or reading a book.
                </p>
              </div>
            </Fade>
            <Fade top cascade>
              <div className="about-skills-container">
                <div className="about-skills-title">
                  <h2>skills</h2>
                </div>
                <h4>
                  <svg
                    style={{ marginRight: '4px' }}
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8L-5.96046e-08 16V0L7 4L14 8Z"
                      fill="#457B9D"
                    />
                  </svg>
                  {'    '}
                  Languages
                </h4>
                <div className="proficient-row">
                  <span>Java</span> <span>JavaScript</span>{' '}
                  <span>HTML/CSS</span> <span>SQL</span>
                </div>
                <div className="intermediate-row">
                  <span>Python</span> <span>OCaml</span> <span>C</span>{' '}
                  <span>Bash</span>
                </div>
                <div className="beginner-row">
                  <span>Swift</span> <span>PHP</span> <span>R</span>{' '}
                </div>
                <h4>
                  <svg
                    style={{ marginRight: '4px' }}
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8L-5.96046e-08 16V0L7 4L14 8Z"
                      fill="#457B9D"
                    />
                  </svg>
                  {'    '}
                  Frameworks
                </h4>
                <div className="proficient-row">
                  <span>React</span> <span>Node</span>
                </div>
                <div className="intermediate-row">
                  <span>Wordpress</span> <span>Drupal</span> <span>Django</span>{' '}
                  <span>Flask</span>{' '}
                </div>
                <div className="beginner-row">
                  <span> Next.js</span>
                </div>
                <h4>
                  <svg
                    style={{ marginRight: '4px' }}
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8L-5.96046e-08 16V0L7 4L14 8Z"
                      fill="#457B9D"
                    />
                  </svg>
                  {'    '}
                  Tools
                </h4>
                <div className="proficient-row">
                  <span>MongoDB</span> <span>Git</span> <span>AWS</span>
                </div>
                <div className="intermediate-row">
                  <span>OracleDB</span> <span>Illustrator</span>{' '}
                  <span>Photoshop</span> <span>Figma</span>{' '}
                </div>
                <div className="beginner-row">
                  <span>Adobe XD</span>
                </div>
              </div>
            </Fade>
          </section>
          <section id="experience">
            <Fade top cascade>
              <div className="experience-title">
                <h2>experience</h2>
              </div>
              <div class="container-x">
                <div class="timeline">
                  <ul>
                    <li>
                      <Card
                        date="Jun 2021 - Sep 2021"
                        cardTitle="Amazon (AWS)"
                        cardSubtitle="Software Development Engineering Intern"
                        img="amazon_icon.png"
                        id="aws-card"
                      />
                    </li>
                    <li>
                      <Card
                        date="May 2021 - Present"
                        cardTitle="University of Pennsylvania"
                        cardSubtitle="CIS 553 (Networked Systems) Course Development Assistant"
                        img="penn.png"
                        width="100%"
                        id="penn-card"
                      />
                    </li>
                    <li>
                      <Card
                        date="Aug 2020 - Present"
                        cardTitle="University of Pennsylvania"
                        cardSubtitle="CIS 557 (Web Programming) Head TA"
                        img="penn.png"
                        width="100%"
                        id="penn-card"
                      />
                    </li>
                    <li>
                      <Card
                        date="Jun 2020 - Aug 2020"
                        cardTitle="Amazon (AWS)"
                        cardSubtitle="Software Development Engineering Intern"
                        img="amazon_icon.png"
                        id="aws-card"
                      />
                    </li>
                    <li>
                      <Card
                        date="Jan 2020 - Dec 2020"
                        cardTitle="University of Pennsylvania"
                        cardSubtitle="MCIT 593 (Intro to Computer Systems) TA"
                        img="penn.png"
                        width="100%"
                        id="penn-card-2"
                      />
                    </li>
                    <li>
                      <Card
                        date="Oct 2018 - May 2019"
                        cardTitle="Glome"
                        cardSubtitle="Mobile Software Engineer"
                        img="glome.png"
                        width="100%"
                        id="glome-card"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </section>
          <section id="projects">
            <div className="projects-title">
              <h2>projects</h2>
              <p>Click on an item to learn more!</p>
            </div>
            <div className="projects-grid">
              <div className="project-item" onClick={this.lit_modal_handler}>
                <h4>Literature Game</h4>
                <img
                  src="/literature-mockup.png"
                  alt="literature-mockup"
                  width="100%"
                />
                <div className="project-item-row">
                  <span>React</span> <span>Node.js</span> <span>Socket.io</span>
                </div>
              </div>
              <div
                className="project-item"
                onClick={this.pennbook_modal_handler}
              >
                <h4>Pennbook</h4>
                <img
                  src="/pennbook-mockup.png"
                  alt="pennbook-mockup"
                  width="100%"
                />
                <div className="project-item-row">
                  <span>React</span> <span>Node.js</span> <span>DynamoDB</span>
                </div>
              </div>
              <div
                className="project-item"
                onClick={this.photogram_modal_handler}
              >
                <h4>Photogram</h4>
                <img
                  src="/photogram-mockup.png"
                  alt="photogram-mockup"
                  width="100%"
                />
                <div className="project-item-row">
                  <span>React</span> <span>MongoDB</span> <span>TravisCI</span>
                </div>
              </div>
              <div className="project-item" onClick={this.carbon_modal_handler}>
                <h4>Carbon</h4>
                <img
                  src="/carbon-mockup.png"
                  alt="carbon-mockup"
                  width="100%"
                />
                <div className="project-item-row">
                  <span>React</span> <span>Node.js</span> <span>OracleDB</span>
                </div>
              </div>
              <div
                className="project-item"
                onClick={this.website_modal_handler}
              >
                <h4>This website 😃</h4>
                <img
                  src="/website-mockup.png"
                  alt="website-mockup"
                  width="100%"
                />
                <div className="project-item-row">
                  <span>React</span> <span>Next.js</span>
                </div>
              </div>
              <div className="project-item" onClick={this.spades_modal_handler}>
                <h4>Spades</h4>
                <img
                  src="/spades-mockup.png"
                  alt="spades-mockup"
                  width="100%"
                />
                <div className="project-item-row">
                  <span>Java</span> <span>Java Swing</span>
                </div>
              </div>
              <Modal
                visible={this.state.lit_modal_visible}
                closeModal={this.lit_modal_handler}
              >
                <div className="project-info-container">
                  <h2>Literature Card Game</h2>
                  <p>
                    An online version of the popular card game Literature (also
                    known as Fish) created using{' '}
                    <a href="https://reactjs.org/" target="_blank">
                      React
                    </a>{' '}
                    for the frontend,{' '}
                    <a href="https://socket.io/" target="_blank">
                      Socket.io
                    </a>{' '}
                    for instant communication amongst players, and deployed to
                    AWS EC2 on a server running{' '}
                    <a href="https://nodejs.org/en/" target="_blank">
                      Node.js
                    </a>
                    .
                  </p>
                  <p>
                    Players are able to create rooms and invite their friends.
                    Check it out{' '}
                    <a href="http://literaturegame.com/" target="_blank">
                      here
                    </a>
                    !
                  </p>
                </div>
              </Modal>
              <Modal
                visible={this.state.pennbook_modal_visible}
                closeModal={this.pennbook_modal_handler}
              >
                <div className="project-info-container">
                  <h2>Pennbook</h2>
                  <p>
                    A mock version of Facebook created using{' '}
                    <a href="https://reactjs.org/" target="_blank">
                      React
                    </a>{' '}
                    for the frontend,{' '}
                    <a href="https://socket.io/" target="_blank">
                      Socket.io
                    </a>{' '}
                    for chatting, and deployed to AWS EC2 on a server running{' '}
                    <a href="https://nodejs.org/en/" target="_blank">
                      Node.js
                    </a>
                    . It also uses{' '}
                    <a href="https://aws.amazon.com/dynamodb/" target="_blank">
                      DynamoDB
                    </a>{' '}
                    for storing user information.
                  </p>
                  <p>
                    Users are able to sign up, add other users as friends, send
                    messages, and create posts.
                  </p>
                </div>
              </Modal>
              <Modal
                visible={this.state.photogram_modal_visible}
                closeModal={this.photogram_modal_handler}
              >
                <div className="project-info-container">
                  <h2>Photogram</h2>
                  <p>
                    A mock version of Instagram created using{' '}
                    <a href="https://reactjs.org/" target="_blank">
                      React
                    </a>{' '}
                    for the frontend,{' '}
                    <a href="https://www.mongodb.com/" target="_blank">
                      MongoDB
                    </a>{' '}
                    to store user information, and deployed on Heroku.
                  </p>
                  <p>
                    Users are able to login/register, create posts, follow other
                    users, comment on posts, and search for tags. Check out the
                    git repository{' '}
                    <a
                      href="https://github.com/tirthakharel/Photogram"
                      target="_blank"
                    >
                      here
                    </a>
                    !
                  </p>
                </div>
              </Modal>
              <Modal
                visible={this.state.carbon_modal_visible}
                closeModal={this.carbon_modal_handler}
              >
                <div className="project-info-container">
                  <h2>Carbon</h2>
                  <p>
                    This web app allows users to plan trips between various
                    cities, and using the Google Maps API along with optimized
                    SQL queries, provides users with estimated carbon emissions
                    for their trips along with optimal routes.
                  </p>
                  <p>
                    This was created using{' '}
                    <a href="https://reactjs.org/" target="_blank">
                      React
                    </a>{' '}
                    with the database service running{' '}
                    <a href="https://www.oracle.com/database/" target="_blank">
                      Oracle
                    </a>
                    . You can check out the repository{' '}
                    <a
                      href="https://github.com/tirthakharel/Carbon"
                      target="_blank"
                    >
                      here
                    </a>
                    !
                  </p>
                </div>
              </Modal>
              <Modal
                visible={this.state.website_modal_visible}
                closeModal={this.website_modal_handler}
              >
                <div className="project-info-container">
                  <h2>Personal Website</h2>
                  <p>
                    This is the second iteration of my personal website. I
                    created it using{' '}
                    <a href="https://reactjs.org/" target="_blank">
                      React
                    </a>{' '}
                    which is running on{' '}
                    <a href="https://nextjs.org/" target="_blank">
                      Next.js
                    </a>
                    . You can see the first iteration of my website{' '}
                    <a
                      href="https://github.com/tirthakharel/website-v2"
                      target="_blank"
                    >
                      here
                    </a>
                    .
                  </p>
                  <p>
                    <a
                      target="_blank"
                      href="mailto:tkharel@seas.upenn.edu?subject=[TKharel Designs] Business Inquiry"
                    >
                      Feel free to leave me any feedback!
                    </a>
                  </p>
                </div>
              </Modal>
              <Modal
                visible={this.state.spades_modal_visible}
                closeModal={this.spades_modal_handler}
              >
                <div className="project-info-container">
                  <h2>Spades Card Game</h2>
                  <p>
                    A 2-player version of Spades created in Java with a GUI
                    developed using the Java Swing library.
                  </p>
                  <p>
                    Check it out{' '}
                    <a
                      href="https://github.com/tirthakharel/SpadesGame"
                      target="_blank"
                    >
                      here
                    </a>
                    !
                  </p>
                </div>
              </Modal>
            </div>
          </section>
          <section id="footer">
            <div className="footer-div">
              <p>Created with ❤️ by Tirtha Kharel</p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
