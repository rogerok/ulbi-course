import { StateSchema } from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { Country } from "entities/CountrySelect";
import { getProfileData } from "./getProfileData";

describe("getProfileData.test", () => {
  test("should return profileData", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: "alex",
          city: "moscow",
          age: 22,
          currency: Currency.RUB,
          country: Country.Armenia,
          lastname: "last",
          username: "user",
        },
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual({
      first: "alex",
      city: "moscow",
      age: 22,
      currency: Currency.RUB,
      country: Country.Armenia,
      lastname: "last",
      username: "user",
    });
  });

  test("should return empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
