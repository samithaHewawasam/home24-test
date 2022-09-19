import { Empty, Layout, Row, Skeleton } from 'antd'
import { ArticleCard } from 'Components/ArticleCard'
import { querySearch } from 'GraphRepository'
import { useGQLRequest } from 'Http'
import { Article } from 'Interfaces'
import React, { memo, useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const { Content } = Layout

const SearchContent: React.FC = memo(() => {
  const [searchParams] = useSearchParams()
  const {
    data,
    isError = false,
    isLoading = false,
    setQuery
  } = useGQLRequest<{
    categories: any
  }>({
    data: { categories: { filters: [] } },
    isError: false,
    isLoading: false
  })

  if (data === null && isError) {
    return <Empty style={{ margin: '20vh auto' }} />
  }
  const {
    categories: { filters }
  } = data

  useEffect(() => {
    if (searchParams.get('query') === null) return

    if (typeof setQuery !== 'undefined') {
      setQuery({
        query: querySearch,
        variables: {
          locale: 'de_DE',
          query: searchParams.get('query'),
          urlParams: `query=${searchParams.get('query') ?? ''}`
        }
      })
    }
  }, [searchParams])

  const handleCartUpdate: (article: Article) => void = useCallback(
    /**
     * @param {Article} article - Article object.
     * @description set articles to cart item
     */

    (article: Article): void => {
      // setCartItems((prevState) => {
      //   return [...prevState, article]
      // })
    },
    [filters]
  )

  return (
    <Content style={{ margin: '24px 16px 0' }}>
      <Skeleton loading={isLoading}>
        <Row gutter={[16, 16]}>
          {filters.length > 0 &&
            filters.map((article: any, index: number) => {
              return (
                <ArticleCard
                  article={{
                    ...article,
                    index,
                    images: [{ url: '' }],
                    prices: { regular: { value: 0 } }
                  }}
                  key={index}
                  handleCartUpdate={handleCartUpdate}
                />
              )
            })}
        </Row>
      </Skeleton>
    </Content>
  )
})

SearchContent.displayName = 'SearchContent'
export default SearchContent
