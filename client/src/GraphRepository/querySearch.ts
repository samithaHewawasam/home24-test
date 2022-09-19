export const querySearch = `query SearchFiltersQuery($query: String, $locale: Locale!, $urlParams: String) {
  categories: search(locale: $locale, query: $query, urlParams: $urlParams) {
    ... on SearchResultArticles {
      filters {
        ... on ProductListRangeFilter {
          ...RangeFilterFragment
        }
        ... on ProductListOptionFilter {
          ...OptionFilterFragment
        }
      }
    }
  }
}
fragment OptionFilterFragment on ProductListOptionFilter {
  key
  name
  multiselect
  showIcon
  options {
    key
    value
    numberOfArticles
    imagePath
    selected
  }
}
fragment RangeFilterFragment on ProductListRangeFilter {
  key
  name
  min
  max
  selectedMin
  selectedMax
  unit
}`
