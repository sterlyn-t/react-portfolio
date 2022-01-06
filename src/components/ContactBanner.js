import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PictureText from './PictureText';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media screen only and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 1.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PictureText>Have a project in mind</PictureText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnLabel="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
