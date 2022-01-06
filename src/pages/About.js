import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PictureText from '../components/PictureText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';

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
                I was first introduced to coding as part of my Actuarial Science
                degree at the University of the West Indies. I was exposed to
                the ins and outs of C++ and I developed a deep interest for
                software development and problem solving.
                <br />
                <br />
                This new found interest led me to purse Electrical Engineering
                at the University of Waterloo. I had co-op experiences at BTNX
                Inc. and Teranet Inc.
              </PictureText>
            </div>
            <Button btnLabel="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="" />
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
