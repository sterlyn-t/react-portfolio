import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ExperienceItem from '../components/ExperienceItem';
import ExperienceInfo from '../assets/data/experiences';

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [experienceData, setExperienceData] = useState(ExperienceInfo);

  useEffect(() => {
    setExperienceData(ExperienceInfo);
  }, []);

  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle
          heading="Experience"
          subheading="some of my recent experiences"
        />
        <div className="projects__allItems">
          {experienceData.map((item) => (
            <ExperienceItem
              key={item.id}
              title={item.name}
              description={item.desc}
              img={item.img}
              hasMoreInfo={item.hasMoreInfo}
              moreInfo={item.moreInfo}
              companyUrl={item.companyUrl}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
