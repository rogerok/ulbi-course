import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleDetails } from "./ArticleDetails";

export default {
  title: "/ArticleDetails",
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
  <ArticleDetails {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};