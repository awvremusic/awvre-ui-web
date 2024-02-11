import type { Preview } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core';
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

library.add(
  faSpotify,
  faSoundcloud,
  faApple,
  faYoutube,
  faThreads,
  faXTwitter,
  faLinkedin,
  faDiscord,
  faFacebookF,
  faInstagram
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
