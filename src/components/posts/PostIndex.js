import React from 'react'
import { getAllPosts } from '../../lib/api'
import { isAuthor } from '../../lib/auth'
import Error from '../common/Error'

function PostIndex() {
  const [posts, setPosts] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !posts && !isError

  React.useEffect(() => {
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

  const displayPosts = () => {
    return (
      posts.map((post) => (
        <div key={post._id} className="card m-5">
          <div className="card-header">
            <div className="card-header-title">
              {post.title}
            </div>
          </div>
          {
            post.image &&
            <div className="card-image">
              <figure className="image">
                <img src={post.image} />
              </figure>
            </div>
          }

          <div className="card-content">
            <div className="content">
              {post.text}
            </div>
            <h3>Liked By: </h3>
            <h4>
              {post.userlikes.length}
              {/* {post.userlikes.map(like => <a key={like}>{like}, </a>)} */}
            </h4>
          </div>
          <footer className="card-footer">
            {
              isAuthor ?
                <>
                  <a href="#" className="card-footer-item">Share</a>
                  <a href="#" className="card-footer-item">Comment</a>
                  <a href="#" className="card-footer-item">Edit</a>
                  <a href="#" className="card-footer-item is-danger">Delete</a>
                </>
                :
                <>
                  <a href="#" className="card-footer-item">Like</a>
                  <a href="#" className="card-footer-item">Comment</a>
                  <a href="#" className="card-footer-item">Share</a>
                </>
            }
          </footer>

        </div>
      ))
    )
  }
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>
          {isError && <Error />}
          {isLoading && <p className="subtitle has-text-centered is-fullwidth">...Loading</p>}
          {posts&& displayPosts()}
        </div>
      </div>
    </section>
  )
}

export default PostIndex