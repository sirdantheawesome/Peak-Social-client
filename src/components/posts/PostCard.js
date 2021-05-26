import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSingleUser } from '../../lib/api'
import { getCurrentUserId, isAuthenticated, isAuthor } from '../../lib/auth'

function PostCard({ title, text, image, userId, comments, likedByArray }) {
  const [author, setAuthor] = useState(null)

  //! Temporary testing variables, swap for auth and passed in user array
  const isCreatorUser = isAuthor(userId)
  console.log('Auth? ', isAuthenticated(), 'isAuthor?', isAuthor(userId))


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleUser(userId)
        setAuthor(res.data)
      } catch (e) {
        console.warn('Failed to fetch Author')
      }
    }
    getData()
  }, [userId])
  console.log(author)

  const likePost = async () => {
    console.log('Liked post of title: ', title)
  }

  const commentPost = async () => {
    console.log('Commented post of title: ', title)
  }

  const sharePost = async () => {
    console.log('Shared post of title: ', title)
  }

  return (
    <div className='column is-full'>
      <div className="card m-5">
        <div className="card-header">
          <div className="card-header-title">
            {title}
          </div>
          <div className='image card-header-icon'>
            <Link
              to={`/profile/${userId}`}
            >
              <div className='has-text-black mr-4 is-size-5 is-hidden-touch'>
                {author && author.username}
              </div>
              <img className='image is-48x48 is-rounded ' src={author ? author.image : ''} />
            </Link>
          </div>
        </div>
        {
          image &&
          <div className="card-image">
            <figure className="image">
              <img className='image' src={image} />
            </figure>
          </div>
        }

        <div className="card-content">
          <div className="content">
            {text}
          </div>
          <h3>
            {likedByArray && 'Liked By:'}
          </h3>
          <h4>
            {likedByArray && likedByArray.map(like => <a key={like}>{like}, </a>)}
          </h4>
        </div>
        <footer className="card-footer">
          {
            isCreatorUser ?
              <>
                <a onClick={likePost} className="card-footer-item">Share</a>
                <a href="#" className="card-footer-item">Comment</a>
                <a href="#" className="card-footer-item">Edit</a>
                <a href="#" className="card-footer-item is-danger">Delete</a>
              </>
              :
              <>
                <a onClick={likePost} className="card-footer-item">Like</a>
                <a onClick={commentPost} className="card-footer-item">Comment</a>
                <a onClick={sharePost} className="card-footer-item">Share</a>
              </>
          }
        </footer>
      </div>
    </div>
  )
}

export default PostCard