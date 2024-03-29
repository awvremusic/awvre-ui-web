export type ButtonProps = {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  children: string | React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
