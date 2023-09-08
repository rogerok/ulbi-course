export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
export { Article, ArticleSchema } from "./model/types/Article";
export {
  articleDetailsReducer,
  articleDetailsActions,
} from "./model/slice/articleDetailsSlice";

export { getArticleDetailsData } from "./model/selectors/articleSelectors/articleSelectors";
