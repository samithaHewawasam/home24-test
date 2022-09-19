import { MainContent, SearchContent } from 'Components'
import Layout from 'Layout'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

/**
 * @description Routes with a Layout
 */
export default createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <MainContent />
      </Layout>
    )
  },
  {
    path: '/search',
    element: (
      <Layout>
        <SearchContent />
      </Layout>
    )
  }
])
