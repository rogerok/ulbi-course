import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticleSortField } from 'entities/Article/model/types/article';

export interface ArticlesSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit?: number;
  hasMore: boolean;
  order: SortOrder;
  _inited: boolean;
  sort: ArticleSortField;
  search: string;
}
