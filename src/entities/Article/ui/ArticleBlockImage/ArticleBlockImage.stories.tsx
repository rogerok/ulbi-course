import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleBlockImage } from "./ArticleBlockImage";

export default {
  title: "/ArticleBlockImage",
  component: ArticleBlockImage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleBlockImage>;

const Template: ComponentStory<typeof ArticleBlockImage> = (args) => (
  <ArticleBlockImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
