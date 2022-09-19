import { Category, State } from 'Interfaces'

export const intialData: State<{ categories: Category[] }> = {
  data: {
    categories: [
      {
        name: '',
        articleCount: 0,
        childrenCategories: { list: [] },
        categoryArticles: { articles: [] }
      }
    ]
  },
  isError: false,
  isLoading: false
}
