import { cleanup, render } from '@testing-library/react'
import { act } from '@testing-library/react-hooks/dom'
import { article } from 'Components/ArticleCard'
import { ProductContext } from 'ProductContext'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import SideBar from './SideBar'

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
  const SideBarComponent = (
    <ProductContext.Provider value={contextData}>
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    </ProductContext.Provider>
  )
  beforeEach(async () => {
    await act(async () => {
      render(SideBarComponent)
    })
  })

  afterEach(() => {
    cleanup()
  })

  /**
   * @description SnapShot for SideBar
   */
  it('renders SideBar correctly', () => {
    const tree = renderer.create(SideBarComponent).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render the 1st menu as Kategorien', () => {
    const _MenuItems = document.querySelectorAll('.ant-menu-title-content')
    expect(_MenuItems[0].innerHTML).toContain('Kategorien')
  })

  it('render the 2nd menu as Schlafzimmer', () => {
    const _MenuItems = document.querySelectorAll('.ant-menu-title-content')
    expect(_MenuItems[1].innerHTML).toContain('Schlafzimmer')
  })
})
