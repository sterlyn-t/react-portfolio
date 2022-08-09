import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PictureText from '../components/PictureText';
import AboutInfoItem from '../components/AboutInfoItem';
import AboutMeImg from '../assets/images/me.jpg';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Sterlyn Tang</span>
            </p>
            <h2 className="about__heading">A software developer</h2>
            <div className="about__info">
              <PictureText>
                I love working on side projects and I am always actively trying
                to expand my knowledge and problem-solving skills.
                <br />
                <br />
                My past co-ops allowed me to gain a vast array of experiences
                having worked with MVC, Microservices and even Event-Driven
                Architectures.
              </PictureText>
            </div>
            <Button btnLabel="Download Resume" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutMeImg} alt="" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="Electrical Engineering"
              items={['University of Waterloo']}
            />
            <AboutInfoItem
              title="Actuarial Science"
              items={['University of the West Indies']}
            />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
