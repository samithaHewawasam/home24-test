import { MenuOutlined } from '@ant-design/icons'
import { Affix, Layout, Menu } from 'antd'
import { ProductContext } from 'ProductContext'
import React, { memo, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

const SideBar: React.FC = memo(() => {
  const { data } = useContext(ProductContext)
  const navigate = useNavigate()

  if (data === null) {
    return <>Error loading Side Bar</>
  }
  const { categories } = data

  return (
    <Affix>
      <Sider
        theme="light"
        style={{
          overflowY: 'auto',
          maxHeight: '100vh',
          overflowX: 'hidden'
        }}
      >
        {categories !== null && (
          <Menu
            mode="inline"
            title=""
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            onSelect={({ key }) => {
              navigate(`/search?category=${key}`)
            }}
            items={[
              {
                key: 'menu',
                label: 'Kategorien',
                icon: <MenuOutlined />
              },
              ...categories[0]?.childrenCategories?.list?.map(
                ({ name }: any, index: number) => ({
                  key: String(index + 1),
                  label: name
                })
              )
            ]}
          />
        )}
      </Sider>
    </Affix>
  )
})

SideBar.displayName = 'SideBar'
export default SideBar
