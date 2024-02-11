import { MediaPlatform } from '../../Constants';
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
  faVimeo,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

import { faQuestion } from '@fortawesome/free-solid-svg-icons';

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
const VIMEO = '#17D5FF';
const UNKNOWN_COLOR = '#000000';

export const MEDIALINK_BRAND_DICTIONARY: Record<
  MediaPlatform,
  {
    color: string;
    icon: IconDefinition;
  }
> = {
  [MediaPlatform.APPLE_MUSIC]: {
    color: APPLE_MUSIC_COLOR,
    icon: faApple,
  },
  [MediaPlatform.DISCORD]: {
    color: DISCORD_COLOR,
    icon: faDiscord,
  },
  [MediaPlatform.FACEBOOK]: {
    color: FACEBOOK,
    icon: faFacebookF,
  },
  [MediaPlatform.INSTAGRAM]: {
    color: INSTAGRAM,
    icon: faInstagram,
  },
  [MediaPlatform.LINKEDIN]: {
    color: LINKEDIN_COLOR,
    icon: faLinkedin,
  },
  [MediaPlatform.SOUNDCLOUD]: {
    color: SOUNDCLOUD_COLOR,
    icon: faSoundcloud,
  },
  [MediaPlatform.SPOTIFY]: {
    color: SPOTIFY_COLOR,
    icon: faSpotify,
  },
  [MediaPlatform.THREADS]: {
    color: THREADS,
    icon: faThreads,
  },
  [MediaPlatform.X]: {
    color: X_COLOR,
    icon: faXTwitter,
  },
  [MediaPlatform.YOUTUBE]: {
    color: YOUTUBE_COLOR,
    icon: faYoutube,
  },
  [MediaPlatform.UNKNOWN]: {
    color: UNKNOWN_COLOR,
    icon: faQuestion,
  },
  [MediaPlatform.VIMEO]: {
    color: VIMEO,
    icon: faVimeo,
  },
};
