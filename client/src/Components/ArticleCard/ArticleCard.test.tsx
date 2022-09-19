import { cleanup, render } from '@testing-library/react'
import { act } from '@testing-library/react-hooks/dom'
import React from 'react'
import renderer from 'react-test-renderer'
import { article } from './Article'
import ArticleCard from './ArticleCard'

describe('Article Card', () => {
  const ArticleComponent = (
    <ArticleCard article={article} handleCartUpdate={jest.fn} />
  )

  /**
   * @description Render Component Promise
   */

  beforeEach(async () => {
    await act(async () => {
      render(ArticleComponent)
    })
  })

  /**
   * @description Clean the test case
   */

  afterEach(() => {
    cleanup()
  })

  /**
   * @description SnapShot for ArticleCard
   */
  it('renders ArticleCard correctly', () => {
    const tree = renderer.create(ArticleComponent).toJSON()
    expect(tree).toMatchSnapshot()
  })

  /**
   * @description ArticleCard Component title should contain given text
   */

  it('render the Article Title', () => {
    const _ArticleCardTitle = document.querySelector(
      '.ant-card-head-title'
    )?.innerHTML
    expect(_ArticleCardTitle).toContain('Beistelltisch Hoya (2er-Set)')
  })

  /**
   * @description ArticleCard Component product image src should match
   */

  it('render the Article Product Image', () => {
    const _ProductImage = document.querySelector(
      '[data-testid=article-image] img'
    ) as HTMLImageElement
    expect(_ProductImage.src).toContain(article.images[0].path)
  })

  /**
   * @description ArticleCard Component product price should format
   */

  it('render the ArticleCard Price', () => {
    const _ArticleCardPrice = document.querySelector(
      '.ant-statistic-content-value'
    )?.innerHTML
    expect(_ArticleCardPrice).toContain('114,99&nbsp;€')
  })
})
