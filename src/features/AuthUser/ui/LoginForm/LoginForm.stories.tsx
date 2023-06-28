import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "features/AuthUser/ui/LoginForm/LoginForm";


export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: "sdw",
        password: "123"
    }
})];
export const WithError = Template.bind({});
Primary.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: {
        username: "sdw",
        password: "123",
        error: "ERROR"
    }
})];
export const Loading = Template.bind({});
Primary.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: {
        username: "sdw",
        password: "123",
        isLoading: true
    }
})];
