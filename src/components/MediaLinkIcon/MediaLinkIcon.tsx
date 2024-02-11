import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLink } from '../ExternalLink';
import { MediaLinkIconProps } from './MediaLinkIcon.types';
import React from 'react';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { useAWVRETheme } from '../AWVREProvider';
import { MediaPlatform } from '../../Constants';
import { MEDIALINK_BRAND_DICTIONARY } from './MediaLinkIconBrandDictionary';

export const MediaLinkIcon = (props: MediaLinkIconProps) => {
  const {
    href,
    platform = MediaPlatform.UNKNOWN,
    className = '',
    customIcon,
    iconColor = 'white',
    ...other
  } = props;

  const { theme } = useAWVRETheme();

  const { color, icon } = MEDIALINK_BRAND_DICTIONARY[platform] || {
    color: 'black',
    icon: faQuestion,
  };

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
        width: theme.spacing.xl,
        height: theme.spacing.xl,
        ...other.style,
      }}
    >
      {customIcon === undefined && (
        <FontAwesomeIcon
          icon={icon}
          color={iconColor}
          className="fa-solid fa-lg"
        />
      )}
      {customIcon !== undefined && customIcon}
    </ExternalLink>
  );
};
