'use client'
import Link from "next/link"
import styled from "styled-components"
import Colors from "../colors/colors"
import Image from "next/image";

const HomePageComponent = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden; 

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('/images/BackgroundHome.jpg'); 
        background-size: cover;
        background-position: center;
        filter: blur(5px); 
        z-index: -1;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row; 

    @media (max-width: 768px) {
        flex-direction: column; 
    }
`;

const TextComponent = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        background-color: rgba(0, 0, 0, 0.4); 
        width: 100%; 
        height: auto; 
        padding: 20px;
    }
`;

const H1Component = styled.h1`
    color: ${Colors.textWhite};
    font-size: 40px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 30px; 
    }
`;

const H2Component = styled.h2`
    color: ${Colors.textWhite};
    font-size: 30px;
    text-align: center;
    margin-top: 50px;

    @media (max-width: 768px) {
        font-size: 25px;
        margin-top: 20px;
    }
`;

const ButtonComponent = styled.button`
    margin-top: 50px;
    width: 200px;
    height: 50px;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    background-color: ${Colors.textWhite};
    color: ${Colors.textBlack};
    border: none;

    @media (max-width: 768px) {
        width: 100%; 
        margin-top: 20px;
    }
`;

const ImageComponent = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: end;

    @media (max-width: 768px) {
        width: 100%; 
        height: auto;
        padding: 20px;
    }
`;

export default function HomePage() {
    return (
        <HomePageComponent>
            <Content>
                <TextComponent>
                    <H1Component>Valeria Garcés Mejia</H1Component>
                    <H2Component>Production Engineer committed to innovation, strategic thinking, and problem-solving.</H2Component>
                    <Link href="/about">
                        <ButtonComponent>Start</ButtonComponent>
                    </Link>
                </TextComponent>
                <ImageComponent>
                    <Image src={'/images/ProfileImage.png'} alt="profile" width={500} height={700} />
                </ImageComponent>
            </Content>
        </HomePageComponent>
    )
}
