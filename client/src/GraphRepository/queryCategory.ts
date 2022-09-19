export const queryCategory = `{categories: productLists(ids: "156126", locale: de_DE) {
    name
    articleCount
    childrenCategories: childrenProductLists {
      list {
        name
        urlPath
      }
    }
    categoryArticles: articlesList(first: 100) {
      articles {
        name
        variantName
        prices {
          currency
          regular {
            value
          }
        }
        images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
          path
        }
      }
    }
  }
}`
