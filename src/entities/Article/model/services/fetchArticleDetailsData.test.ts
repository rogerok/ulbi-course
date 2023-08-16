import axios from "axios";
import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk";
import { ArticleType } from "entities/Article/model/types/Article";
import { fetchProfileData } from "entities/Profile";
import { fetchArticleDetailsData } from "./fetchArticleDetailsData";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

const data = {
  article: {
    data: {
      id: "1",
      title: "Javascript news",
      subtitle: "Что нового в JS за 2022 год?",
      img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
      views: 1022,
      createdAt: "26.02.2022",
      type: [ArticleType.IT],
      blocks: [],
    },
  },
};

describe("fetch article details data", () => {
  test("fetch article", async () => {
    const thunk = new TestAsyncThunk(fetchArticleDetailsData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("should fetch error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual("error");
  });
});
