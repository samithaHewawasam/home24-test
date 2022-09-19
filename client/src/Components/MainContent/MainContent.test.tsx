import { cleanup, render } from '@testing-library/react'
import { act } from '@testing-library/react-hooks/dom'
import { article } from 'Components/ArticleCard'
import { ProductContext } from 'ProductContext'
import React from 'react'
import renderer from 'react-test-renderer'
import MainContent from './MainContent'

const contextData = {
  data: {
    categories: [
      {
        name: '',
        articleCount: 0,
        childrenCategories: {
          list: [
            {
              name: 'Schlafzimmer',
              urlPath: ''
            }
          ]
        },
        categoryArticles: { articles: [article] }
      }
    ]
  },
  isError: false,
  isLoading: false
}

describe('Main Content', () => {
  const MainContentComponent = (
    <ProductContext.Provider value={contextData}>
      <MainContent />
    </ProductContext.Provider>
  )

  beforeEach(async () => {
    await act(async () => {
      render(MainContentComponent)
    })
  })

  afterEach(() => {
    cleanup()
  })

  /**
   * @description SnapShot for Main Content
   */
  it('renders Main Content correctly', () => {
    const tree = renderer.create(MainContentComponent).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render the Product Card Title', () => {
    const _ProductCardTitle = document.querySelector(
      '.ant-card-head-title'
    )?.innerHTML
    expect(_ProductCardTitle).toContain('Beistelltisch Hoya (2er-Set)')
  })
})
