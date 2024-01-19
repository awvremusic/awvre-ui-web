import React from "react";
import { keyframes, styled } from "styled-components";
import { AWVRE_GREEN, AWVRE_TAG_IMAGE_URL } from "../../Constants"
import { FooterProps } from "./Footer.types";

const backgroundSlideX = keyframes`
0% {
    background-position: 0 0;
  }

  100% {
    background-position: 100% 0;
  }
`

export const CustomFooter = styled.footer<FooterProps>`
    position: relative;
    overflow: hidden;
    width: 100vw;
    display: flex;
    flex-flow: row nowarp;
    justify-content: center;

    &::before {
        content: "";
        display: block;
        background-image: url("${props => props.imageUrl ?? AWVRE_TAG_IMAGE_URL}");
        background-size: cover;
        background-blend-mode: overlay;
        background-color: ${props => props.backgroundColor};
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 60%;
        opacity: 0.3;
        margin: auto;
        animation: ${backgroundSlideX} ${props => props.animationDuration}s linear infinite;
        transition: background-position 0.5s ease-in-out;
    }

    &::after {
        content: "";
        display: block;
        background-color: ${props => props.backgroundColor};
        z-index: -2;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`

const CenteredText = styled.p`
    text-align: center;
    margin: auto;
    font-weight: bold;
    padding: 1.5rem;
`

const Footer: React.FC<FooterProps> = ({ text = "Made with ❤️ by AWVRE", animationDuration = 750, backgroundColor = AWVRE_GREEN, className }) => (
    <CustomFooter className={`${className ?? ""}`} backgroundColor={backgroundColor} animationDuration={animationDuration}>
        <CenteredText>{text}</CenteredText>
    </CustomFooter>
)

export default Footer;