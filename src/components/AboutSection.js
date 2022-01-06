import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PictureText from './PictureText';
import SectionTitle from './SectionTitle';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left {
      width: 100%;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="About Me"
            className="section-title"
          />
          <PictureText>
            I am a 3rd year Electrical Engineering student at the University of
            Waterloo. I love to develop full stack web applications. I also have
            a deep interest in software and game development.
          </PictureText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnLabel="Works" />
            <Button btnLink="/about" btnLabel="Read More" outline />
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
