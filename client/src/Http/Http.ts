import axios, { AxiosError, AxiosResponse } from 'axios'
/**
 * @param  {AxiosError} error
 * @returns Promise
 */
const errorInterceptor = async (error: AxiosError): Promise<AxiosError> => {
  switch (error?.response?.status) {
    case 400:
      break
    case 401:
      break
    case 404:
      break
    default:
  }
  return await Promise.reject(error)
}
/**
 * @param  {AxiosResponse} response
 * @returns returnresponse
 */
const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  switch (response.status) {
    case 200:
      break
    case 204:
      break
    default:
  }
  return response
}
/**
 * @param  {{Accept:'application/json'} {headers
 * @param  {'application/json'}} 'Content-Type'
 * @param  {[function(response} transformResponse
 * @description axios instance where tranform the GraphQL Reponse from serilaized json to JS object
 */
const axiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  transformResponse: [
    function (response) {
      return JSON.parse(response).data
    }
  ]
})
/**
 * @param  {AxiosResponse} responseInterceptor
 * @param  { Promise<AxiosError>} errorInterceptor
 */
axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor)

/** @namespace */
const Http = {
  /**
   * @param  {string} query
   * @memberof Http
   */
  post: async function (query: string, variables: any) {
    return await axiosInstance.post<{ data: { query: string, variables: any } }, any>(
      '/graphql',
      { query, variables }
    )
  }
}
export default Http
