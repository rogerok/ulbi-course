import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationOpenButton } from './NotificationOpenButton';

export default {
  title: '_/NotificationOpenButton',
  component: NotificationOpenButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationOpenButton>;

const Template: ComponentStory<typeof NotificationOpenButton> = (args) => (
  <NotificationOpenButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
