import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

const tabs = [
  {
    value: 'IT',
    content: <p>IT</p>,
  },
  {
    value: 'SCIENCE',
    content: <p>SCIENCE</p>,
  },
  {
    value: 'MOVIE',
    content: <p>MOVIE</p>,
  },
];

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'IT',
  tabs,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: 'IT',
  tabs,
  onTabClick: action('onTabClick'),
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];
