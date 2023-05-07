import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: "Lorem ipsum dolor\n" +
    "                    sit amet, consectetur adipisicing elit. Accusamus aliquam commodi culpa cum\n" +
    "                    distinctio dolorum ducimus eligendi error\n" +
    "                    iste molestiae nesciunt officiis quidem, ratione\n" +
    "                    reiciendis sed\n" +
    "                    tempore tenetur veniam voluptatem."


};


export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: "Lorem ipsum dolor\n" +
    "                    sit amet, consectetur adipisicing elit. Accusamus aliquam commodi culpa cum\n" +
    "                    distinctio dolorum ducimus eligendi error\n" +
    "                    iste molestiae nesciunt officiis quidem, ratione\n" +
    "                    reiciendis sed\n" +
    "                    tempore tenetur veniam voluptatem."


};
Dark.decorators = [ThemeDecorator(Theme.LIGHT)];
