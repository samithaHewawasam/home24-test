import { http } from 'Http'
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useReducer,
  useRef,
  useState
} from 'react'

interface State<T> {
  data: T
  isError?: boolean
  isLoading?: boolean
  setQuery?: Dispatch<SetStateAction<any>>
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'request', payload: T }
  | { type: 'error' }

/**
 * @param  {State<T>} intialValues
 * @description Handle GraphQL Requests
 * @returns State
 */
export const useGQLRequest = <T>(intialValues: State<T>): State<T> => {
  /**
   * @typedef {String} GraphQLQuery
   */
  const [query, setQuery] = useState<any>('')
  /**
   * @param {Boolean} false
   * @description Use to clean up the axios request in UseEffect when unmounting
   */
  const cancelRequest = useRef<boolean>(false)
  /**
   * @param  {State<T>} state
   * @param  {Action<T>} action
   * @description To handle internal states via reducer
   * @returns state
   */
  const requestReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...intialValues, isLoading: true }
      case 'request':
        return { ...intialValues, data: action.payload }
      case 'error':
        return { ...intialValues, isError: true }
      default:
        return state
    }
  }
  /**
   * @param  {State<T>} requestReducer
   * @param  {State<T>} intialValues
   */
  const [state, dispatch] = useReducer(requestReducer, intialValues)

  useEffect(() => {
    /**
     * @param  {String} query
     * @description Return back when query is empty
     */
    if (query.query === null || typeof query.query === 'undefined') return

    cancelRequest.current = false
    /**
     * @description Fetch GraphQL data
     * @returns {Promise<boolean>}
     */
    const fetch = async (): Promise<boolean> => {
      try {
        dispatch({ type: 'loading' })
        const { data } = await http.post(query.query, query.variables)
        if (data !== null) {
          dispatch({ type: 'request', payload: data })
        } else {
          dispatch({ type: 'error' })
        }
      } catch (error) {
        dispatch({ type: 'error' })
        if (cancelRequest.current) return true
      }
      return true
    }

    void fetch()

    return () => {
      cancelRequest.current = true
    }
  }, [query])

  return { ...state, setQuery }
}
