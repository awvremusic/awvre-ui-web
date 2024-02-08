import React from 'react';
import { ScrollingTextBannerProps } from './ScrollingTextBanner.types';
import {motion} from 'framer-motion';

const MarqueeText = ({text, textColor, fontFamily, fontSize, fontWeight, animationDuration}: ScrollingTextBannerProps) => (
    <motion.span 
                style={{color: textColor, fontFamily, fontSize, fontWeight, display: 'inline-block', paddingLeft: "100%"}}
                animate={{
                    transform: "translateX(-100%)",
                }}
                transition={{
                    duration: animationDuration,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                }}
                >
                    {text}
    </motion.span>
)

export const ScrollingTextBanner: React.FC<ScrollingTextBannerProps> = ({
    text = "Default text",
    textColor = "white",
    fontFamily = "Arial",
    fontSize = "12pt",
    backgroundColor = "black",
    fontWeight = "bold",
    animationDuration = 25,
    height = "10vh",
    className = "",
    style = {},
    ...other
}) => {
    return (
        <div {...other}  className={`scrolling-text-banner ${className}`} style={{backgroundColor, maxWidth: "100%", position: "relative", height, ...style}}>
            <p
                className="scrolling-text-banner-marquee"
                style={{
                    margin: "0 auto",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    width: "100%",
                    display: "grid",
                    alignItems: "center",
                }}
            >
    <MarqueeText text={text} textColor={textColor} fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} animationDuration={animationDuration} />
            </p>
        </div>
    )
}