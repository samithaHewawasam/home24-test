import { cleanup, render } from '@testing-library/react'
import { act } from '@testing-library/react-hooks/dom'
import { Article } from 'Interfaces'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Header from './Header'

const cartItems: Article[] = [
  {
    name: 'Beistelltisch Hoya (2er-Set)',
    index: 1,
    prices: {
      currency: 'EUR',
      regular: {
        value: 11499
      }
    },
    images: [
      {
        path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000174115-190524-15511900114-IMAGE-P000000001000174115.webp'
      }
    ]
  }
]

describe('Header', () => {
  const HeaderComponent = (
    <BrowserRouter>
      <Header cartItems={cartItems} setLocale={jest.fn} />
    </BrowserRouter>
  )
  beforeEach(async () => {
    await act(async () => {
      render(HeaderComponent)
    })
  })

  afterEach(() => {
    cleanup()
  })

  /**
   * @description SnapShot for Header
   */
  it('renders Header correctly', () => {
    const tree = renderer.create(HeaderComponent).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render the Header Title', () => {
    const _HeaderTitle = document.querySelector(
      '.ant-page-header-heading-title'
    )?.innerHTML
    expect(_HeaderTitle).toContain('Home24')
  })

  it('render the Header Sub Title', () => {
    const _HeaderSubTitle = document.querySelector(
      '.ant-page-header-heading-sub-title'
    )?.innerHTML
    expect(_HeaderSubTitle).toContain(
      'The online destination for home and living.'
    )
  })
})
