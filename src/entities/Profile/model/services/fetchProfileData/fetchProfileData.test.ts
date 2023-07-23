import axios from "axios";
import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

const data = {
  first: "Тимур",
  lastname: "Ульби",
  age: 22,
  currency: "USD",
  country: "Armenia",
  city: "Moscow",
  username: "admin",
  avatar:
    "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
};

describe("fetchProfileData.test", () => {
  test("fetch success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("fetch error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("error");
  });
});
