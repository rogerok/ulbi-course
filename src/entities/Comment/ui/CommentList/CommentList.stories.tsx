import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CommentList } from "./CommentList";

export default {
  title: "entities/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  comments: [
    {
      text: "this is a  text",
      user: {
        id: "8",
        username: "afrew6",
        avatar: "https://robohash.org/etvelitnihil.png?size=50x50&set=set1",
      },
      id: "1",
      postId: "1",
      articleId: "1",
      userId: "9",
    },
  ],
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
  comments: [
    {
      text: "this is a  text",
      user: {
        id: "8",
        username: "afrew6",
        avatar: "https://robohash.org/etvelitnihil.png?size=50x50&set=set1",
      },
      id: "1",
      postId: "1",
      articleId: "1",
      userId: "9",
    },
  ],
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryPurple = Template.bind({});

PrimaryPurple.args = {
  comments: [
    {
      text: "this is a  text",
      user: {
        id: "8",
        username: "afrew6",
        avatar: "https://robohash.org/etvelitnihil.png?size=50x50&set=set1",
      },
      id: "1",
      postId: "1",
      articleId: "1",
      userId: "9",
    },
  ],
};
PrimaryPurple.decorators = [ThemeDecorator(Theme.PURPLE)];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
