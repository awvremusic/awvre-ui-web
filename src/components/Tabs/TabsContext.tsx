import React, { createContext, useContext, useState } from "react";
import { TabProps } from "./Tab.types";
import { AWVREThemeProperties } from "../../types";
import { styled } from "styled-components";
import { useAWVRETheme } from "../AWVREProvider";

type TabsProps = {
    children: React.ReactElement<TabProps> | Array<React.ReactElement<TabProps>>;
    initialTab?: number | string;
} & React.HTMLAttributes<HTMLDivElement>;

type TabsContextType = {
    onTabPress: (value: number | string) => void;
    activeTab: number | string;
}

const tabsContext = createContext<TabsContextType | undefined>(undefined);

type StyledTabsWrapperProps = {
    $theme: AWVREThemeProperties;
}

const StyledTabsWrapper = styled.div<StyledTabsWrapperProps>`
    display: flex;
    flex-direction: row;
    gap: ${({ $theme }) => $theme.spacing.sm};
    justify-content: start;
    align-items: center;
`;

export const Tabs = ({ children, initialTab }: TabsProps) => {
    const { theme } = useAWVRETheme();
    const [activeTab, setActiveTab] = useState<string | number>(initialTab ?? 0);

    const onTabPress = (value: number | string) => {
        setActiveTab(value);
    }

    return (
        <tabsContext.Provider value={{ onTabPress, activeTab }}>
            <StyledTabsWrapper $theme={theme}>
                {children}
            </StyledTabsWrapper>
        </tabsContext.Provider>
    );
};

export const useTabs = () => {
    const context = useContext(tabsContext);
    if (!context) {
        throw new Error("useDesktopNavigation must be used within a DesktopNavigationProvider");
    }
    return context;
}