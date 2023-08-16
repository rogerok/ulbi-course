import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "./Icon";
import OkIcon from "../../assets/icons/ok.svg";

export default {
  title: "shared/Icon",
  component: Icon,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Svg: OkIcon,
};
