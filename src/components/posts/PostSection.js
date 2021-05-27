import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSingleUser } from '../../lib/api'
import { isAuthor } from '../../lib/auth'

function PostSection({ title, userId, author, image, text, likedByArray, likePost, commentPost, sharePost, editPost, deletePost }) {
  const [likedNames, setLikedNames] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        await setLikedNames(await Promise.all(likedByArray.map(async (user) => {
          const res = await getSingleUser(user)
          return res.data.username
        })))
      } catch (e) {
        console.warn('Failed to fetch Author')
      }
    }
    getData()
  }, [likedByArray])

  console.log('liked names: ', likedNames)
  return (
    <>
      <div className="card-header columns p-0 m-0">
        <div className="column card-header-title is-size-4 ml-5 mt-4">
          {title}
        </div>
        <div className='image card-header-icon'>
          <Link
            to={`/profile/${userId}`}
          >
            <div className='box columns p-1 m-1 has-text-centered'>
              <div className='column is-half has-text-black mr-0 is-size-4 is-hidden-touch'>
                {author && author.username}
              </div>
              <img className='column image is-64x64  is-rounded ' src={author ? author.image : ''} />
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
          {likedByArray.length > 0 ? 'Liked By:' : ''}
          {console.log(likedByArray)}
        </h3>
        <h4>
          {
            likedByArray &&
            likedNames.map((like, i) => (
              <Link
                to={`/profile/${likedByArray[i]}`}
                key={like}
              >
                {like}, </Link>
            ))
          }
        </h4>
      </div>
      <footer className="card-footer">
        {
          isAuthor(userId) ?
            <>
              <a onClick={likePost} className="card-footer-item">Share</a>
              <a onClick={commentPost} className="card-footer-item">Comment</a>
              <a onClick={editPost} className="card-footer-item">Edit</a>
              <a onClick={deletePost} className="card-footer-item has-text-danger is-danger">Delete</a>
            </>
            :
            <>
              <a onClick={likePost} className="card-footer-item">Like</a>
              <a onClick={commentPost} className="card-footer-item">Comment</a>
              <a onClick={sharePost} className="card-footer-item">Share</a>
            </>
        }
      </footer>
    </>
  )
}

export default PostSection