import React from 'react'
import UserCard from './UserCard'
import { getAllPosts } from '../../lib/api'
import Error from '../../components/common/Error'
import PostCard from '../posts/PostCard'
import PostIndex from '../posts/PostIndex'

function UserFeed({ input }) {

  const [posts, setPosts] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !posts && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllPosts()
        setPosts(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])
  console.log('Profile page is here')
  return (
    <>
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="columns">
          <div className="column">
            {isError && <Error />}
            {isLoading && <p>loading... </p>}
            <UserCard />
          </div>
          <div className="column is-half">
            <PostIndex input={input} />
            {/* <div className="block">
              <input className="input is-medium" type="text" placeholder="Whats on your mind??" />
            </div>
            <div className="block">
              {posts && (
                posts.map(post => <PostCard key={post.id} {...post} />)
              )}
            </div> */}
          </div>
          <div className="column">
            <p>Following</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserFeed
