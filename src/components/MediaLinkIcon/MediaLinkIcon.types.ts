export interface MediaLinkIconProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  platform:
    | 'spotify'
    | 'instagram'
    | 'facebook'
    | 'threads'
    | 'x'
    | 'discord'
    | 'youtube'
    | 'soundcloud'
    | 'apple'
    | 'linkedin'
    | 'twitter'
    | 'tiktok'
    | 'twitch'
    | 'bandcamp'
    | 'mixcloud'
    | 'snapchat'
    | 'pinterest'
    | 'reddit'
    | 'vimeo'
    | 'whatsapp'
    | 'telegram'
    | 'email'
    | 'phone'
    | 'website'
    | 'other'
    | 'custom';
  href: string;
  customIcon?: React.ReactNode;
}
