import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Root, {
  loader as rootLoader, action as rootAction,
} from './routes/roots.tsx'
import ErrorPage from './error-page.tsx'
import Contact, {
  loader as contactLoader,
} from './routes/contact.tsx'

import EditConttact, { action as editAction, } from './routes/edit.tsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader, // 路由 加载数据，需要配合 useLoaderData
    action: rootAction,
    children: [
      { index: true, element: <div /> },

      {
        path: 'contacts/:contactId',
        loader: contactLoader,
        element: <Contact />
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditConttact />,
        loader: contactLoader,
        action: editAction,

      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
