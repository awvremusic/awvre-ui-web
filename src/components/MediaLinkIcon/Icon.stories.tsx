import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MediaLinkIcon } from './MediaLinkIcon';
import { AWVREProvider } from '../AWVREProvider';
import { MediaPlatform } from '../../Constants';

const meta: Meta = {
  title: 'AWVRE-UI/MediaLinkIcon',
  component: MediaLinkIcon,
  argTypes: {},
  tags: ['MediaLinkIcon', 'AWVRE-UI', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof MediaLinkIcon>;

export const Default: Story = (args) => (
  <AWVREProvider>
    <MediaLinkIcon {...args} />
  </AWVREProvider>
);

Default.storyName = 'MediaLinkIcon (Default)';
Default.args = {
  href: 'https://www.youtube.com',
};

export const AllBrands: Story = () => (
  <AWVREProvider>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        placeItems: 'center',
        gap: 20,
        padding: 20,
      }}
    >
      {Object.values(MediaPlatform).map((platform) => (
        <MediaLinkIcon
          key={platform}
          className={platform}
          href={`https://www.${platform}.com`}
          platform={platform}
        />
      ))}
    </div>
  </AWVREProvider>
);

AllBrands.storyName = 'All Brands';

export const CustomIcon: Story = () => (
  <AWVREProvider>
    <MediaLinkIcon
      href="https://www.youtube.com"
      style={{ backgroundColor: 'white' }}
      customIcon={
        <img src="https://via.placeholder.com/50" alt="Custom Icon" />
      }
      iconColor="indigo"
    />
  </AWVREProvider>
);

CustomIcon.storyName = 'Custom Icon';
