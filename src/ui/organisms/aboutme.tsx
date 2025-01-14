"use client";
import Image from "next/image";
import styled from "styled-components";
import Colors from "../colors/colors";

const AboutMeComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageComponent = styled.div`
  width: 350px;
  height: 350px;
  margin-right: 20px;
  border-radius: 50%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const InfoComponent = styled.div`
  max-width: 600px;
`;

const H1Component = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${Colors.textBlack};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const H2Component = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  font-weight: normal;
  color: ${Colors.textBlack};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export default function AboutMe() {
  return (
    <AboutMeComponent>
      <ImageComponent>
        <Image src={'/images/ProfileImage.png'} alt="profile" width={300} height={400} />
      </ImageComponent>
      <InfoComponent>
        <H1Component>About Me</H1Component>
        <H2Component>
          Production Engineer with a focus on Project Management. Committed and diligent in work, 
          with skills in innovation, strategic thinking, and resourcefulness in problem-solving. 
          Eager to learn new knowledge and embrace new challenges, with strong adaptability and 
          teamwork abilities.
        </H2Component>
      </InfoComponent>
    </AboutMeComponent>
  );
}
