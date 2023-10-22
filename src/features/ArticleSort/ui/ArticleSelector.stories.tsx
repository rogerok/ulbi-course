import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSelector } from './ArticleSelector';

export default {
  title: 'features/ArticleSelector',
  component: ArticleSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleSelector>;

const Template: ComponentStory<typeof ArticleSelector> = (args) => (
  <ArticleSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
