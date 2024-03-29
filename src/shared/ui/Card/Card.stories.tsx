import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from 'shared/ui/Text/Text';
import { Card, CardTheme } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text title="test" text="text text" />,
};

export const Outline = Template.bind({});
Outline.args = {
  children: <Text title="test" text="text text" />,
  theme: CardTheme.OUTLINE,
};
