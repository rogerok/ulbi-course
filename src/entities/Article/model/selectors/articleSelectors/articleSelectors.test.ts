import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from "./articleSelectors";

describe("getArticleDataTest", () => {
  test("should return article data", () => {
    const data = {
      title: "title",
      subtitle: "title",
    };

    const state: DeepPartial<StateSchema> = {
      article: {
        data,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test("should return empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        error: "error",
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual("error");
  });

  test("should return loading true", () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true);
  });
});
