'use client'
import Link from "next/link";
import ButtonsNavigation from "../molecules/buttons_navbar";
import styled from "styled-components";
import Colors from "../colors/colors";

const NavbarComponent = styled.nav`
    width: 100%;
    background-color: ${Colors.primary};
    height: 70px;
    display: flex;
    justify-content: space-between;
`;

const TitleComponent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 5%;
`;

const H2 = styled.h2`
    font-size: 20px;
    color: ${Colors.textBlack};
`;
    

export default function Navbar() {
    return (
      <NavbarComponent>
        <TitleComponent>
          <Link href="/" passHref>
            <H2>Valeria Garcés Mejia</H2>
          </Link>
        </TitleComponent>
        <ButtonsNavigation />
      </NavbarComponent>
    );
  }
  