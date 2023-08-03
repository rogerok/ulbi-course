import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleBlockText } from "./ArticleBlockText";

export default {
  title: "/ArticleBlockText",
  component: ArticleBlockText,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleBlockText>;

const Template: ComponentStory<typeof ArticleBlockText> = (args) => (
  <ArticleBlockText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
