import { keyframes, styled } from "styled-components";
import { AWVRE_GREEN, AWVRE_TAG_IMAGE_URL } from "../../Constants"

export type FooterProps = {
    text?: string;
    animationDuration?: number;
    backgroundColor?: string;
}

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

    &::before {
        content: "";
        display: block;
        background-image: url("${AWVRE_TAG_IMAGE_URL}");
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
        background-color: ${AWVRE_GREEN};
        z-index: -2;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`

export const Footer = ({ text = "Made with ❤️ by AWVRE", animationDuration = 750, backgroundColor = AWVRE_GREEN }: FooterProps) => (
    <CustomFooter className=" py-10 flex-row-reverse justify-center align-middle" backgroundColor={backgroundColor} animationDuration={animationDuration}>
        <p className="text-center font-bold">{text}</p>
    </CustomFooter>
)