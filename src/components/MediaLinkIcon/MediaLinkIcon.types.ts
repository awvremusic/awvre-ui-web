import { MediaPlatform } from '../../Constants';

export interface MediaLinkIconProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  platform?: MediaPlatform;
  href: string;
  customIcon?: React.ReactNode;
  iconColor?: string;
}
