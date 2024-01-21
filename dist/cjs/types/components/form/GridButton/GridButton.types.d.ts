/// <reference types="react" />
export type GridButtonProps = {
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    leftComponent?: React.ReactNode;
    rightComponent?: React.ReactNode;
    children: string | React.ReactNode;
    backgroundColor?: string;
};
