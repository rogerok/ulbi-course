import axios from "axios";
import { TestAsyncThunk } from "shared/config/tests/TestAsyncThunk";
import { postCommentForArticle } from "pages/ArticleDetailsPage/model/services/postCommentForArticle/postCommentForArticle";
import { addCommentActions } from "features/addCommentForm/model/slices/addCommentFormSlice";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

describe("postCommentForArticle.test", () => {
  const comment = {
    id: "1",
    text: "purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in",
    postId: "1",
    articleId: "1",
    userId: "9",
  };

  test("post success", async () => {
    const thunk = new TestAsyncThunk(postCommentForArticle, {
      user: {
        authData: {
          id: "1",
        },
      },
      article: {
        data: {
          id: "1",
        },
      },
    });

    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));
    const result = await thunk.callThunk("123");
    expect(thunk.api.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(thunk.dispatch).toHaveBeenCalledWith(addCommentActions.setText(""));
  });

  test("post error", async () => {
    const thunk = new TestAsyncThunk(postCommentForArticle);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.post).not.toHaveBeenCalled();
  });
});
