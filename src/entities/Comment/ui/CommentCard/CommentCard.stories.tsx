import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentCard } from "./CommentCard";

export default {
  title: "entities/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: "1",
    text: "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in",
    postId: "1",
    articleId: "1",
    userId: "9",
    user: {
      id: "8",
      username: "afrew6",
      avatar: "https://robohash.org/etvelitnihil.png?size=50x50&set=set1",
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
