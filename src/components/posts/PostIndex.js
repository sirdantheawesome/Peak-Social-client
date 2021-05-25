import React from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../../lib/api'
import Error from '../common/Error'

function PostIndex() {
  const [posts, setPosts] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !posts && !isError

  React.useEffect(()=>{
    const getData = async () => {
      try {
        const res = await getAllPosts()
        setPosts(res.data)
      } catch (error) {
        setIsError(true)
      }
    }
    getData()
  }, [])
  return (
    <h1>All posts for non peek users to view</h1>
  )
}

export default PostIndex