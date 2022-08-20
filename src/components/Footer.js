import React from 'react';
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import PictureText from './PictureText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
  }
  .icon__container {
    display: flex;
    font-size: 3rem;
    justify-content: center;
    text-align: center;
    margin: auto;
  }
  .icon__style {
    font-size: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="icon__container">
          <a href="https://github.com/sterlyn-t?tab=repositories">
            <AiFillGithub style={{ paddingLeft: '25px' }} />
          </a>
          <a href="https://www.linkedin.com/in/sterlyn-tang/">
            <AiFillLinkedin style={{ paddingLeft: '25px' }} />
          </a>
          <a href="mailto:sterlyntang31@gmail.com">
            <AiOutlineMail style={{ paddingLeft: '25px' }} />
          </a>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PictureText>© 2022 Sterlyn Tang</PictureText>
        </div>
      </div>
    </FooterStyles>
  );
}
