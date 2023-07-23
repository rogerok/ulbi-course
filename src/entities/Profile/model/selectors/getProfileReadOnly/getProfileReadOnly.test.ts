import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadOnly } from "./getProfileReadOnly";

describe("getProfileReadOnly.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadOnly(state as StateSchema)).toBe(true);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadOnly(state as StateSchema)).toBe(undefined);
  });
});
