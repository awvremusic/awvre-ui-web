export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string | number;
    label: string;
   leftComponent?: React.ReactNode;
    rightComponent?: React.ReactNode;
    indicatorClassName?: string;
    indicatorStyle?: React.CSSProperties;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactElement<TabProps> | Array<React.ReactElement<TabProps>>;
    initialTab?: number | string;
}