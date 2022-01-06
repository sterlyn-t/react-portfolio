import React from 'react';
import styled from 'styled-components';

const Pstyles = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PictureText({ children }) {
  return (
    <Pstyles className="para">
      <p>{children}</p>
    </Pstyles>
  );
}
