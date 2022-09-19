const intlNumberFormatValues = ['de-DE', 'currency', 'EUR']
const [local, style, currency] = intlNumberFormatValues
/**
 * @param  {String} local
 * @param  {String} {style
 * @description Format currency base on local
 * @param  {String} currency}
 */
export const formatter = new Intl.NumberFormat(local, {
  style,
  currency
})
