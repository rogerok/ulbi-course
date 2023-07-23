import { StateSchema } from "app/providers/StoreProvider";
import { Currency } from "entities/Currency";
import { Country } from "entities/CountrySelect";
import { getProfileFormData } from "./getProfileFormData";

describe("getProfileFormData.test", () => {
  test("should return form data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        formData: {
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

    expect(getProfileFormData(state as StateSchema)).toEqual({
      first: "alex",
      city: "moscow",
      age: 22,
      currency: Currency.RUB,
      country: Country.Armenia,
      lastname: "last",
      username: "user",
    });
  });
});
