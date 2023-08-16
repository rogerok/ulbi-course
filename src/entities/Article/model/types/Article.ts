export enum ArticleType {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMY = "ECONOMY",
}

export enum BlockTypes {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

export interface ArticleBlockBase {
  id: string;
  type: BlockTypes;
}

export interface ArticleCode extends ArticleBlockBase {
  code: string;
  type: BlockTypes.CODE;
}

export interface ArticleText extends ArticleBlockBase {
  paragraphs: string[];
  title: string;
  type: BlockTypes.TEXT;
}

export interface ArticleImage extends ArticleBlockBase {
  src: string;
  title: string;
  type: BlockTypes.IMAGE;
}

export type ArticleBlock = ArticleCode | ArticleText | ArticleImage;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export interface ArticleSchema {
  data?: Article;
  error?: string;
  isLoading: boolean;
}
