export interface Price {
  currency: string
  regular: {
    value: number
  }
}
export interface Image {
  path: string
}
export interface Article {
  name: string
  index: number
  prices: Price
  images: Image[]
}

export interface ChildCategory {
  name: string
  urlPath: string
}

export interface Category {
  name: string
  articleCount: number
  childrenCategories: { list: ChildCategory[] }
  categoryArticles: { articles: Article[] }
}

export interface State<T> {
  data: T
  isError: boolean
  isLoading: boolean
}
