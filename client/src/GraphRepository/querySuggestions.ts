export const querySuggestions = `query SearchSuggestions(
  $prefix: String!
  $locale: Locale!
  $format: ArticleImageFormat
) {
  suggestions: autoSuggestion(prefix: $prefix, locale: $locale) {
    name
    count: results
    image(format: $format, maxWidth: 32, maxHeight: 32)
  }
}`
