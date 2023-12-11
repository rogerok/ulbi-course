import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'shared/ui/Button/Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button>123</Button>,
  items: [
    {
      disabled: true,
      content: 'content',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
