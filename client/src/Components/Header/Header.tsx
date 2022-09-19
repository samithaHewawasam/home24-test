import { ShoppingCartOutlined } from '@ant-design/icons'
import { AutoComplete, Badge, Input, PageHeader, Radio } from 'antd'
import { querySuggestions } from 'GraphRepository'
import { useGQLRequest } from 'Http'
import { Article, State } from 'Interfaces'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

interface Suggestion {
  name: string
  image: string
}

const intialData: State<{ suggestions: Suggestion[] }> = {
  data: {
    suggestions: [
      {
        name: '',
        image: ''
      }
    ]
  },
  isError: false,
  isLoading: false
}

export const Header: React.FC<{
  setLocale: (e: string) => void
  cartItems: Article[]
}> = memo(({ setLocale, cartItems }) => {
  const navigate = useNavigate()
  const { data, isError, isLoading, setQuery } = useGQLRequest<{
    suggestions: Suggestion[]
  }>(intialData)

  const handleSearch = (searchText: string): void => {
    if (searchText === null) return

    if (typeof setQuery !== 'undefined') {
      setQuery({
        query: querySuggestions,
        variables: { locale: 'de_DE', format: 'WEBP', prefix: searchText }
      })
    }
  }

  const handleSelect = (selectedText: string): void => {
    navigate(`/search?query=${selectedText}`)
  }

  return (
    <PageHeader
      ghost={false}
      title="Home24"
      subTitle="The online destination for home and living."
      extra={[
        <AutoComplete
          key={'searchAutoComplete'}
          style={{ width: 300 }}
          options={data?.suggestions.map(({ name }) => ({ value: name }))}
          dropdownMatchSelectWidth
          notFoundContent={
            isError === true ? 'Something Wrong here' : 'Not Found'
          }
          autoFocus
          onSearch={(text: string) => handleSearch(text)}
          onSelect={(text: string) => handleSelect(text)}
        >{console.log(window.location.pathname)}
          <Input.Search
            size="middle"
            placeholder="Search here"
            enterButton
            loading={isLoading}
          />
        </AutoComplete>,
        <Radio.Group
          defaultValue="de_DE"
          buttonStyle="solid"
          key={'locale'}
          onChange={(e) => setLocale(e.target.value)}
        >
          <Radio.Button value="de_DE">DE</Radio.Button>
          <Radio.Button value="fr_FR">FR</Radio.Button>
        </Radio.Group>,
        <Badge
          className="site-badge-count-109"
          count={cartItems.length}
          key={'shopingCart'}
          style={{ backgroundColor: '#52c41a' }}
        >
          <ShoppingCartOutlined style={{ fontSize: '32px', color: '#08c' }} />
        </Badge>
      ]}
    ></PageHeader>
  )
})

Header.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setLocale: PropTypes.func.isRequired
}

Header.displayName = 'Header'
export default Header
