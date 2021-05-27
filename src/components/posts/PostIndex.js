import React from 'react'
import { getAllPosts } from '../../lib/api'
import Error from '../common/Error'
import PostCard from './PostCard'

function PostIndex(popup) {
  const [posts, setPosts] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !posts && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllPosts()
        setPosts(res.data.reverse())
      } catch (error) {
        setIsError(true)
      }
    }
    getData()
  }, [popup])

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>
          {isError && <Error />}
          {isLoading && <p className="subtitle has-text-centered is-fullwidth">...Loading</p>}
          {posts &&
            posts.map((post) => (
              <PostCard
                key={post._id}
                title={post.title}
                image={post.image}
                text={post.text}
                userId={post.user}
                comments={post.comments}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PostIndex