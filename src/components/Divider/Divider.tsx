import React from 'react'
import { DividerProps } from "./Divider.types";
import { useAWVRETheme } from '../AWVREProvider';

export const Divider = (props: DividerProps) => {
    const {
        className,
        style,
        ...other
    } = props;

    const { theme } = useAWVRETheme();

    return (
        <hr
            className={`awvre-divider ${className}`}
            style={{ width: "100%", height: 1, backgroundColor: theme.colors.font, opacity: 0.15, border: "none", marginTop: theme.spacing.sm, marginBottom: theme.spacing.sm, ...style}}
            {...other}
        />
    );
}