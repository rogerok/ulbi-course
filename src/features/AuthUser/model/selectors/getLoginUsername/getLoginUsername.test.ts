import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername.test", () => {

    test("should return username", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "123"
            }
        };

        expect(getLoginUsername(state as StateSchema)).toEqual("123");
    });


    test("should return empty string", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });


});
