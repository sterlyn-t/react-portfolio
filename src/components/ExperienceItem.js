import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ExperienceItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__description {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .projectItem__button {
    margin-top: 2rem;
    font-size: 1.2rem;
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
  }
  .projectItem__button__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Experience Name',
  description = 'Experience Description',
  moreInfo = false,
}) {
  return (
    <ExperienceItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__description">{description}</p>
        {moreInfo === false ? (
          <></>
        ) : (
          <div className="projectItem__button__container">
            <a
              href="/test.com"
              className="projectItem__button"
              target="_blank"
              rel="noreferrer"
            >
              View More Info
            </a>
          </div>
        )}
      </div>
    </ExperienceItemStyles>
  );
}
