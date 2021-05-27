import { Link } from 'react-router-dom'
import { isAuthor } from '../../lib/auth'

function PostSection({ title, userId, author, image, text, likedByArray, likePost, commentPost, sharePost }) {
  return (
    <>
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
          isAuthor(userId) ?
            <>
              <a onClick={likePost} className="card-footer-item">Share</a>
              <a className="card-footer-item">Comment</a>
              <a className="card-footer-item">Edit</a>
              <a className="card-footer-item is-danger">Delete</a>
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