import { formatter } from 'Utility'

describe('Formatter', () => {
  it('render the ArticleCard Price', () => {
    const _Amount = formatter.format(11499)
    expect(_Amount).toContain('11.499,00 €')
  })
})
