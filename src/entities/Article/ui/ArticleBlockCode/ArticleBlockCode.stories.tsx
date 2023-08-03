import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleBlockCode } from "./ArticleBlockCode";

export default {
  title: "/ArticleBlockCode",
  component: ArticleBlockCode,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleBlockCode>;

const Template: ComponentStory<typeof ArticleBlockCode> = (args) => (
  <ArticleBlockCode {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
