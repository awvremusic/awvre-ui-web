import React from "react";
import { useTabs } from "./TabsContext";
import { TabProps as DesktopNavigationTabProps } from "./Tab.types";
import { Text } from "../Text";
import { AWVREThemeProperties } from "../../types";
import { styled } from "styled-components";
import { useAWVRETheme } from "../AWVREProvider";

type StyledTabProps = {
    $theme: AWVREThemeProperties;
}

const StyledTab = styled.div<StyledTabProps>`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: ${({ $theme }) => $theme.spacing.md};
    justify-content: start;
    align-items: center;
    position: relative;
    padding: ${({ $theme }) => $theme.spacing.xs};
`

const StyledTabIndicator = styled.span<StyledTabProps>`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: ${({ $theme }) => $theme.colors.primary};
    transition: all 0.3s;
    border-radius: 0.25rem;

    &.active {
        width: 100%;
    }
`

export const Tab = (props: DesktopNavigationTabProps) => {
    const { label, value, onClick, className, leftComponent, rightComponent, indicatorClassName, indicatorStyle, ...other} = props;
    const { onTabPress, activeTab } = useTabs();
    const { theme } = useAWVRETheme();

    const handleClick = (event: any) => {
        if (onClick) {
            onClick(event);
        }

        onTabPress(value);
    }

    return (
        <StyledTab
        {...other}
            className={`desktop-navigation-tab ${className ?? ""}`}
            onClick={handleClick}
            $theme={theme}
            >
                {leftComponent}
            <Text variant="body2">{label}</Text>
            {rightComponent}
            <StyledTabIndicator className={`desktop-navigation-tab-indicator ${activeTab === value ? "active" : ""}`} style={indicatorStyle} $theme={theme}/>
        </StyledTab>
    );
}