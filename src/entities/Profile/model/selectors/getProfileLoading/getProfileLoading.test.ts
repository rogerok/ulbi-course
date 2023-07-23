import { StateSchema } from "app/providers/StoreProvider";
import { getProfileLoading } from "./getProfileLoading";

describe("getProfileLoading.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileLoading(state as StateSchema)).toBe(true);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileLoading(state as StateSchema)).toBe(undefined);
  });
});
