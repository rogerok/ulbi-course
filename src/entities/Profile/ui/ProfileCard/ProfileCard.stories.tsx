import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProfileCard } from "entities/Profile";
import { Country } from "entities/CountrySelect";
import { Currency } from "entities/Currency";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: "Alox",
    country: Country.Armenia,
    age: 22,
    username: "Alik",
    currency: Currency.USD,
    city: "Moscow",
    avatar:
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
  },
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  isLoading: true,
};
export const WithError = Template.bind({});
WithError.args = {
  isError: true,
};
