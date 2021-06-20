import React from 'react';
import './HeaderMessage.css';
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { Button } from 'react-bootstrap';


const MyTitleMessage = styled.h2`
  width: 100%;
  z-index: 1;
  text-align: center;
  strong {
    font-size: 1.00em;
  }
  div {
    color: orange;
    font-weight: 400;
    letter-spacing: 5px;
    .main {
      font-size: 45px;
    }
    .sub {
      font-size: 30px;
      letter-spacing: 1.5px;
    }
  }
`;


const HeaderMessage = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage w-100 h-100 p-4 d-flex justify-content-center align-items-center">
        <div className="heading p-4 text-left w-75">
          <div className="main">
            <h1 className="fw-bolder text-dark">Hi, I'M <br></br> <span className="color-primary my-name">N.A Siddiky</span></h1><br />
            <h3 className="text-dark">MERN Stack Developer</h3>
          </div>
          <div className="sub text-warning">
            <Typewriter
              options={{
                strings: ["React", "Node Js", "Redux", "MongoDB", "Express JS"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
          <div>
            <Button className="btn-custom mt-3" target="_blank" href="https://drive.google.com/file/d/1MD7KtIoMcxQtXTMzjNUkHx3ow49S_k8_/view?usp=sharing">RESUME</Button>
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
};

export default HeaderMessage;



