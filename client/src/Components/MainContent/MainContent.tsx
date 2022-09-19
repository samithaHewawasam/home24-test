import { Empty, Layout, Row, Skeleton } from 'antd'
import { ArticleCard } from 'Components/ArticleCard'
import { Article } from 'Interfaces'
import { ProductContext } from 'ProductContext'
import React, { memo, useCallback, useContext } from 'react'

const { Content } = Layout

const MainContent: React.FC = memo(() => {
  const { data, isLoading, isError } = useContext(ProductContext)

  if (data === null && isError) {
    return <Empty style={{ margin: '20vh auto' }} />
  }
  const { categories } = data

  const handleCartUpdate: (article: Article) => void = useCallback(
    /**
     * @param {Article} article - Article object.
     * @description set articles to cart item
     */

    (article: Article): void => {
      // ToDo - Write handle cart update function
    },
    [categories]
  )

  return (
    <Content style={{ margin: '24px 16px 0' }}>
      <Skeleton loading={isLoading}>
        <Row gutter={[16, 16]}>
          {categories.length > 0 &&
            categories.map((category: any) => {
              return category?.categoryArticles.articles.map(
                (article: any, index: number) => {
                  return (
                    <ArticleCard
                      article={{ ...article, index }}
                      key={index}
                      handleCartUpdate={handleCartUpdate}
                    />
                  )
                }
              )
            })}
        </Row>
      </Skeleton>
    </Content>
  )
})

MainContent.displayName = 'MainContent'
export default MainContent
