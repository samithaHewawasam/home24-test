import { ShoppingCartOutlined } from '@ant-design/icons'
import { Card, Col, Image, Statistic } from 'antd'
import { Article } from 'Interfaces'
import React, { memo } from 'react'
import { formatter } from 'Utility'

interface IArticleCard {
  article: Article
  handleCartUpdate: any
}

const ArticleCard: React.FunctionComponent<IArticleCard> = memo(function ({
  article,
  handleCartUpdate
}: IArticleCard) {
  return (
    <Col
      xxl={4}
      xl={5}
      lg={6}
      md={6}
      sm={24}
      xs={24}
      style={{ textAlign: 'center' }}
    >
      <Card
        title={article.name}
        hoverable
        actions={[
          <ShoppingCartOutlined
            key={'ShopingCart'}
            onClick={() => {
              handleCartUpdate(article)
            }}
          />
        ]}
      >
        <Image
          alt={article.name}
          data-testid='article-image'
          src={article.images[0].path}
          style={{ marginTop: 5 }}
        />
        <Statistic
          value={formatter.format(article.prices.regular.value / 100)}
          precision={2}
        />
      </Card>
    </Col>
  )
})

ArticleCard.displayName = 'ArticleCard'
export default ArticleCard
