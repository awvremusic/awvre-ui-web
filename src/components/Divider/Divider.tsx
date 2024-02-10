import React from 'react'
import { DividerProps } from "./Divider.types";
import { AWVRE_GRAY } from '../../Constants';

export const Divider = (props: DividerProps) => {
    const {
        className,
        style,
        ...other
    } = props;

    return (
        <hr
            className={`divider ${className}`}
            style={{ height: 1, backgroundColor: AWVRE_GRAY, border: "none", ...style}}
            {...other}
        />
    );
}