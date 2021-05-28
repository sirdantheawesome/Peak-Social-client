import React from 'react'
import UserCard from './UserCard'
import { getAllPosts } from '../../lib/api'
import Error from '../../components/common/Error'
import PostIndex from '../posts/PostIndex'
import { useParams } from 'react-router-dom'

function UserFeed({ input }) {

  const { userId } = useParams()
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


  console.log(userId)

  return (
    <>
      <section className="  is-fullheight-with-navbar">
        <div className="columns">
          <div className="column">
            {isError && <Error />}
            {isLoading && <p>loading... </p>}
            <UserCard />
          </div>
          <div className="column is-half">
            <PostIndex input={input} userId={userId} />
          </div>
          <div className="column">
          </div>
        </div>
      </section>
    </>
  )
}

export default UserFeed
