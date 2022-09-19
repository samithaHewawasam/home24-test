import { act, renderHook } from '@testing-library/react-hooks'
import { queryCategory } from 'GraphRepository'
import { intialData } from 'ProductIntialData'
import { useGQLRequest } from './useGQLRequest'

/**
 * @description test useGQLRequest hook
 */
test('should return data categories', () => {
  const { result } = renderHook(() => useGQLRequest(intialData))

  act(() => {
    if (typeof result.current.setQuery !== 'undefined') {
      result.current.setQuery({ query: queryCategory, variables: { locale: 'de_DE', format: 'WEBP' } })
    }
  })

  expect(result.current.data.categories).toBe(intialData.data.categories)
})
