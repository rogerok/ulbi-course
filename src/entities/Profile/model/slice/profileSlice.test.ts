import { Currency } from "entities/Currency";
import { Country } from "entities/CountrySelect";

import { updateProfileData } from "entities/Profile";
import { ProfileSchema } from "../types/profile";

import { profileActions, profileReducer } from "./profileSlice";

const data = {
  first: "Тимур",
  lastname: "Ульби",
  age: 22,
  currency: Currency.USD,
  country: Country.Armenia,
  city: "Moscow",
  username: "admin",
  avatar:
    "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
};
describe("profileSlice", () => {
  test("test set profile data", () => {
    const state: DeepPartial<ProfileSchema> = {};

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setProfileData(data)
      )
    ).toEqual({
      formData: data,
    });
  });

  test("set read only", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({
      readonly: true,
    });
  });

  test("cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEditProfile())
    ).toEqual({
      readonly: true,
      data,
      formData: data,
    });
  });

  test("update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      formData: { username: "123" },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.setProfileData({
          username: "123",
        })
      )
    ).toEqual({
      formData: {
        username: "123",
      },
    });
  });

  test("update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
    });
  });
  test("update profile service fullfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "1")
      )
    ).toEqual({
      isLoading: false,
      readonly: true,
      data,
      error: undefined,
      formData: data,
    });
  });
});
