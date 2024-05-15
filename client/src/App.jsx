import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import ErrorPage from "./Pages/ErrorPage"
import Home from "./Pages/Home"
import PostDetails from "./Pages/PostDetails"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Logout from "./Pages/Logout"
import UserProfile from "./Pages/UserProfile"
import EditPost from "./Pages/EditPost"
import CreatePost from "./Pages/CreatePost"
import Authors from "./Pages/Authors"
import CategoryPosts from "./Pages/CategoryPosts"
import Dashboard from "./Pages/Dashboard"
import AuthorsPosts from './Pages/AuthorsPosts'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "posts/:id",
        element: <PostDetails />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        path: "profile/:id",
        element: <UserProfile />
      },
      {
        path: "/posts/:id/edit",
        element: <EditPost />
      },
      {
        path: "authors",
        element: <Authors />
      },
      {
        path: "create",
        element: <CreatePost />
      },
      {
        path: "posts.categories/:category",
        element: <CategoryPosts />
      },
      {
        path: "myposts/:id",
        element: <Dashboard />
      },
      {
        path: "posts/users/:id",
        element: <AuthorsPosts />
      },


  ]
  }
])


const App = () => {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
