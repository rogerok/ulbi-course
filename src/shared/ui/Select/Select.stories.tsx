import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "shared/ui/Select/Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Укажите значение",
  options: [
    {
      content: "123",
      value: "123",
    },
    {
      content: "1234",
      value: "1234",
    },
  ],
};
