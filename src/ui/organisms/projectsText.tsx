'use client'
import styled from "styled-components"

const Container = styled.div`
    margin: 25px auto;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const H1 = styled.h1`
    width: 100%;
    text-align: left;
    font-size: 26px;
    margin-bottom: 20px;
`;

const P = styled.p`
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 30px;
`;

export default function ProjectText() {

    return (
        <Container>
            <H1>Engineering Projects</H1>
            <P>As a Production Engineer, I have developed and led various engineering projects, ranging from process planning and organization to the creation of products from scratch. My experience includes designing and optimizing production lines, ensuring their efficient operation through constant monitoring and the implementation of strategic improvements. These projects have allowed me to apply both technical skills and management knowledge, integrating innovative solutions tailored to the specific needs of each challenge. Below, I present some of the key projects that showcase my commitment to excellence and continuous improvement.</P>
        </Container>
    )
}