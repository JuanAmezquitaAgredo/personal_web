'use client'
import styled from 'styled-components';
import Colors from '../colors/colors';

const DivEducation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Titleedu = styled.h2`
  font-size: 30px;
  width: 87%;
  font-weight: bold;
  color: ${Colors.textBlack};
  margin: 0 0 20px;
`;

const SectionEducation = styled.div`
  background-color: ${Colors.secondary};
  width: 90%;
  padding: 20px;
  margin: 10px 0 10px 0;
  border-radius: 10px;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.textWhite};
  margin: 0;
`;

const Line = styled.div`
  width: 50%;
  height: 2px;
  background-color: ${Colors.textWhite};
  margin: 10px 0;
`;

const Dates = styled.p`
  font-size: 20px;
  color: ${Colors.textWhite};
  margin: 0;
`;

const Place = styled.p`
  font-size: 20px;
  color: ${Colors.textWhite};
  margin: 5px 0 0;
`;


export default function Education() {
    return (
        <DivEducation>
            <Titleedu>Education</Titleedu>
            <SectionEducation>
                <Title>Production Engineering</Title>
                <Line />
                <Dates>January 2020 - December 2024</Dates>
                <Place>EAFIT University - Medellín</Place>
            </SectionEducation>
            <SectionEducation>
                <Title>English as a Second Language Course</Title>
                <Line />
                <Dates>January 2019 - September 2019</Dates>
                <Place>Academie Linguistique Internationale (ALI) - Canada</Place>
            </SectionEducation>
        </DivEducation>
    );
};