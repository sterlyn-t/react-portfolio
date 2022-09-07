import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -200px;
`;

const ModalWrapper = styled.div`
  width: 600px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: var(--gray-1);
  background: color: var(--deep-dark);
  display: flex;
  padding: 1rem;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 1);
  grid-template-columns: 1fr 1fr;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 10;
  margin-left: -300px;
  margin-top: -200px;
  border: 3px solid var(--gray-2);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  position: relative;
  margin-top: -185px;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const ModalHeading = styled.h3`
  margin-top: 10px;
`;

export default function ExperienceModal({
  showModal,
  setShowModal,
  title,
  moreInfo,
  techUsed,
}) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <ModalHeading>{title}</ModalHeading>
                <br />
                <p>{techUsed}</p>
                <p>{moreInfo}</p>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}
