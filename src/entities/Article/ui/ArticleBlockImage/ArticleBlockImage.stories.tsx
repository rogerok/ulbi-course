import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BlockTypes } from "entities/Article/model/types/Article";
import { ArticleBlockImage } from "./ArticleBlockImage";

export default {
  title: "entities/ArticleBlockImage",
  component: ArticleBlockImage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleBlockImage>;

const Template: ComponentStory<typeof ArticleBlockImage> = (args) => (
  <ArticleBlockImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  block: {
    id: "2",
    type: BlockTypes.IMAGE,
    src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
    title: "Рисунок 1 - скриншот сайта",
  },
};
