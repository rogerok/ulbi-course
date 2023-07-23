import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError.test", () => {
  test("should return an error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "error happened",
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual("error happened");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
