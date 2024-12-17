'use client'
import styled from "styled-components"
import Colors from "../colors/colors"
import ButtonsNavigation from "../molecules/buttons_navbar"

const HomePageComponent = styled.div`
    width: 100;
    height: 100vh;
    background-color: ${Colors.background};
`
export default function HomePage(){

    return(
        <HomePageComponent>
            <h1>HomePage</h1>
            <ButtonsNavigation/>
        </HomePageComponent>
    )
}