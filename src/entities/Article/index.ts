export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
export { ArticleList } from "./ui/ArticleList/ArticleList";
export { Article, ArticleSchema, ArticleView } from "./model/types/Article";
export {
  articleDetailsReducer,
  articleDetailsActions,
} from "./model/slice/articleDetailsSlice";

export { getArticleDetailsData } from "./model/selectors/articleSelectors/articleSelectors";
