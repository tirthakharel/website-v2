import Typewriter from 'typewriter-effect';
import Head from 'next/head';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt, faFileAlt } from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: ['design', 'networks'],
    };
  }

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
                <FontAwesomeIcon icon={faFileAlt} width="30px" height="30px" />
              </li>
            </ul>
          </div>
          <section className="top">
            <div className="top-info-container">
              <p className="pre-title">hi! my name is</p>
              <h1>tirtha kharel</h1>
              <p className="post-title">
                I am a computer science student at the{' '}
                <a
                  className="title-link"
                  href="http://upenn.edu"
                  target="_blank"
                >
                  university of pennsylvania
                </a>{' '}
                with a passion for{' '}
                <Typewriter
                  options={{
                    strings: [
                      'web development',
                      'design',
                      'networks',
                      'teaching',
                      'open source',
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    wrapperClassName: 'typing-effect',
                  }}
                />
              </p>
              <div className="button-row">
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
              </div>
            </div>
            <div className="top-img-container">
              <img width="339px" src="/my-face2.png" alt="my face" />
            </div>
          </section>
        </main>
      </div>
    );
  }
}
