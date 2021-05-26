import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSingleUser } from '../../lib/api'
import { isAuthenticated, isAuthor } from '../../lib/auth'
import CommentCard from './CommentCard'

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
          <div className="card-header-title is-size-3 ml-5">
            {title}
          </div>
          <div className='image card-header-icon'>
            <Link
              to={`/profile/${userId}`}
            >
              <div className='box columns p-1 m-1 has-text-centered'>
                <div className='column has-text-black mr-4 is-size-4 is-hidden-touch'>
                  {author && author.username}
                </div>
                <img className='column image is-64x64 is-rounded ' src={author ? author.image : ''} />
              </div>
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
        <div className='container is-fullwidth'>
          <CommentCard text={'weird post bro'} />
        </div>
      </div>
    </div>
  )
}

export default PostCard