import { createContext } from 'react'
import { intialData } from 'ProductIntialData'

/**
 * Conext for Products
 * @param  {State<{ categories: Category[] }>} intialData
 */

export const ProductContext = createContext(intialData)
