import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLink } from '../ExternalLink';
import { MediaLinkIconProps } from './MediaLinkIcon.types';
import {
  faSpotify,
  faSoundcloud,
  faApple,
  faYoutube,
  faThreads,
  faXTwitter,
  faLinkedin,
  faDiscord,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useAWVRETheme } from '../AWVREProvider';

const SPOTIFY_COLOR = '#1DB954';
const APPLE_MUSIC_COLOR = '#FC3C44';
const YOUTUBE_COLOR = '#FF0000';
const SOUNDCLOUD_COLOR = '#FF3300';
const DISCORD_COLOR = '#5865F2';
const LINKEDIN_COLOR = '#0077B5';
const X_COLOR = '#000000';
const THREADS = '#000000';
const FACEBOOK = '#316FF6';
const INSTAGRAM = '#E1306C';
const UNKNOWN_COLOR = '#000000';

export const MediaLinkIcon = (props: MediaLinkIconProps) => {
  const { href, platform, className = '', customIcon, ...other } = props;

  const { theme } = useAWVRETheme();

  let color = '';
  let icon = null;
  switch (platform) {
    case 'spotify':
      color = SPOTIFY_COLOR;
      icon = faSpotify;
      break;
    case 'apple':
      color = APPLE_MUSIC_COLOR;
      icon = faApple;
      break;
    case 'youtube':
      color = YOUTUBE_COLOR;
      icon = faYoutube;
      break;
    case 'soundcloud':
      color = SOUNDCLOUD_COLOR;
      icon = faSoundcloud;
      break;
    case 'discord':
      color = DISCORD_COLOR;
      icon = faDiscord;
      break;
    case 'linkedin':
      color = LINKEDIN_COLOR;
      icon = faLinkedin;
      break;
    case 'x':
      color = X_COLOR;
      icon = faXTwitter;
      break;
    case 'threads':
      color = THREADS;
      icon = faThreads;
      break;
    case 'facebook':
      color = FACEBOOK;
      icon = faFacebookF;
      break;
    case 'instagram':
      color = INSTAGRAM;
      icon = faInstagram;
      break;
    default:
      color = UNKNOWN_COLOR;
      icon = faQuestion;
  }

  return (
    <ExternalLink
      {...other}
      href={href}
      className={`awvre-media-link ${className}`}
      style={{
        backgroundColor: color,
        margin: 'auto',
        overflow: 'hidden',
        borderRadius: 9999,
        padding: theme.spacing.md,
        display: 'grid',
        placeItems: 'center',
        ...other.style,
      }}
    >
      {customIcon === undefined && (
        <FontAwesomeIcon
          icon={icon}
          color={'white'}
          className="fa-solid fa-lg"
        />
      )}
      {customIcon !== undefined && customIcon}
    </ExternalLink>
  );
};
