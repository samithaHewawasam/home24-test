import { Layout } from 'antd'
import { Header, SideBar } from 'Components'
import { queryCategory } from 'GraphRepository'
import { useGQLRequest } from 'Http'
import { Article, Category, State } from 'Interfaces'
import { ProductContext } from 'ProductContext'
import React, { memo, useEffect, useState } from 'react'
const { Footer } = Layout

const intialData: State<{ categories: Category[] }> = {
  data: {
    categories: [
      {
        name: '',
        articleCount: 0,
        childrenCategories: { list: [] },
        categoryArticles: { articles: [] }
      }
    ]
  },
  isError: false,
  isLoading: false
}

const MainLayout: React.FunctionComponent = memo(({ children }: any) => {
  const [locale, setLocale] = useState<string>('de_DE')
  const [cartItems] = useState<Article[]>([])
  const { data, isError = false, isLoading = false, setQuery } = useGQLRequest<{
    categories: Category[]
  }>(intialData)

  useEffect(() => {
    if (typeof setQuery !== 'undefined') {
      setQuery({ query: queryCategory, variables: { locale, format: 'WEBP' } })
    }
  }, [locale])

  return (
    <>
      <Layout style={{ minHeight: 'calc(100vh - 128px)' }}>
        <Header setLocale={setLocale} cartItems={cartItems} />
        <ProductContext.Provider value={{
          data,
          isError,
          isLoading
        }}>
          <Layout style={{ height: '100%' }}>
            <SideBar/>
            {children}
          </Layout>
        </ProductContext.Provider>
        <Footer style={{ textAlign: 'center' }}>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
          Versandkosten.
        </Footer>
      </Layout>
    </>
  )
})

MainLayout.displayName = 'MainLayout'
export default MainLayout
