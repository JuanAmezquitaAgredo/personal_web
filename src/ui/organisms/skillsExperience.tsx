'use client'
import styled from 'styled-components';
import Colors from '../colors/colors';

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const TitleSkills = styled.h2`
  font-size: 30px;
  width: 87%;
  font-weight: bold;
  color: ${Colors.textBlack};
  margin: 0 0 20px;
`;

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

const SkillCard = styled.div`
    background-color: ${Colors.secondary};
    padding: 20px;
    width: 35vw;
    border-radius: 10px;
    text-align: left;
`;

const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.textWhite};
    margin: 0 0 10px 0;
`;

const Info = styled.p`
    font-size: 20px;
    color: ${Colors.textWhite};
    margin: 5px 0;
`;

export default function SkillsAndExperience() {
  return (
    <Skills>
      <TitleSkills>Skills & Experience</TitleSkills>
      <SkillsContainer>
        <SkillCard>
          <Title>Software</Title>
          <Info>SolidWorks</Info>
          <Info>Mechanical Design</Info>
          <Info>Advance</Info>
        </SkillCard>

        <SkillCard>
          <Title>Software</Title>
          <Info>Microsoft Office Word, Excel, etc</Info>
          <Info>Advance</Info>
        </SkillCard>

        <SkillCard>
          <Title>Languages</Title>
          <Info>English</Info>
          <Info>Spanish</Info>
          <Info>Fluent</Info>
        </SkillCard>

        <SkillCard>
          <Title>Tools</Title>
          <Info>Power BI</Info>
          <Info>SAP</Info>
          <Info>Medium</Info>
        </SkillCard>
      </SkillsContainer>
    </Skills>
  );
}

