import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" }
    },
    args: {
        to: "/"
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "lorem ipsum dolor sit amet, consectetur adipis",
    text: "lorem ipsum dolor sit amet, consectetur adipis"
};

export const Error = Template.bind({});
Error.args = {
    title: "lorem ipsum dolor sit amet, consectetur adipis",
    text: "lorem ipsum dolor sit amet, consectetur adipis",
    theme: TextTheme.ERROR
};


export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: "lorem ipsum dolor sit amet, consectetur adipis"
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: "lorem ipsum dolor sit amet, consectetur adipis"
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "lorem ipsum dolor sit amet, consectetur adipis",
    text: "lorem ipsum dolor sit amet, consectetur adipis"
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: "lorem ipsum dolor sit amet, consectetur adipis"
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: "lorem ipsum dolor sit amet, consectetur adipis"
};

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
