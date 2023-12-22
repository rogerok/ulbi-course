export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export type { ArticleDetailsRecommendationSchema } from './model/types/ArticleDetailsRecommendationSchema';
export type { ArticleDetailsPageSchema } from './model/types/index';

export { articleDetailsPageCommentsReducer } from './model/slices/articleDetailsPageCommentsSlice';
export { articleDetailsPageRecommendationReducer } from './model/slices/articleDetailsPageRecommendationSlice';
