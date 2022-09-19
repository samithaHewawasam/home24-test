import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router-dom'
import Routes from 'Routes'

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>,
  document.getElementById('root')
)
