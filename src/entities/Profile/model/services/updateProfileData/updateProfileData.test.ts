import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk";
import { profileActions } from "entities/Profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/CountrySelect";
import { updateProfileData } from "./updateProfileData";

jest.mock("axios");

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
describe("updateProfileData.test", () => {
  test("update Success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("update error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData);
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
