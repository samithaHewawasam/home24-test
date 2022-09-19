import { cleanup, render } from '@testing-library/react'
import { act } from '@testing-library/react-hooks/dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import SearchContent from './SearchContent'

/**
 * @description set window object with search query param
 */
const location = {
  ...window.location,
  search: '?query=yonkers'
}
Object.defineProperty(window, 'location', {
  writable: true,
  value: location
})

describe('Search Content', () => {
  const SearchContentComponent = (
    <BrowserRouter>
      <SearchContent />
    </BrowserRouter>
  )
  beforeEach(async () => {
    await act(async () => {
      render(SearchContentComponent)
    })
  })

  afterEach(() => {
    cleanup()
  })

  /**
   * @description SnapShot for Search Content
   */
  it('renders Search Content correctly', () => {
    const tree = renderer.create(SearchContentComponent).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render the AutoComplete', () => {
    // TODO - Write test for Search Suggestions
    // TODO - Write test for Click and navigate to the search route
  })
})
