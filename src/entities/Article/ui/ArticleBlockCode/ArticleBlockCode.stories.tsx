import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BlockTypes } from "entities/Article/model/types/Article";
import { ArticleBlockCode } from "./ArticleBlockCode";

export default {
  title: "entities/ArticleBlockCode",
  component: ArticleBlockCode,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleBlockCode>;

const Template: ComponentStory<typeof ArticleBlockCode> = (args) => (
  <ArticleBlockCode {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  block: {
    id: "3",
    type: BlockTypes.CODE,
    code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
  },
};
