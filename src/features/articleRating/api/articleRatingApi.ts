import { rtkApi } from 'shared/api/rtkApi';
import { Rating } from 'entities/Rating';

interface GetArticleArg {
  userId: string;
  articleId: string;
}
interface RateArticleArg {
  userId: string;
  articleId: string;
  feedback?: string;
  rate: number;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (data) => ({
        url: '/article-ratings',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } =
  articleRatingApi;
