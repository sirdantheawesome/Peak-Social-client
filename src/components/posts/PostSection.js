import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletePost, getSingleUser, likePost } from '../../lib/api'
import { getCurrentUserId, isAuthenticated, isAuthor } from '../../lib/auth'
import { useHistory } from 'react-router-dom'


function PostSection({ title, userId, author, image, text, likedByArray, postId, handleUpdatePosts, setPopup1, setPopup, setPopupComment }) {
  const [likedNames, setLikedNames] = useState([])
  const [likeText, setLikeText] = useState('Like')
  const history = useHistory()


  useEffect(() => {
    likedByArray.includes(getCurrentUserId()) ? setLikeText('Unlike') : setLikeText('Like')
    const getData = async () => {
      try {
        await setLikedNames(await Promise.all(likedByArray.map(async (user) => {
          const res = await getSingleUser(user)
          return res.data.username
        })))
      } catch (err) {
        console.warn('Failed to fetch Author')
      }
    }
    getData()
  }, [likedByArray])



  const handleLikePost = async (event) => {
    event.stopPropagation()

    if (!isAuthenticated()) {
      history.push('/')
    }

    try {
      const res = await likePost(postId)
      handleUpdatePosts(res.data)

    } catch (err) {
      console.warn(err)
    }

  }

  const handleCommentPost = async (event) => {
    event.stopPropagation()
    if (!isAuthenticated()) {
      history.push('/')
    }
    setPopup('modal')
    setPopupComment('modal is-active')

  }



  const handleEditPost = async (event) => {
    event.stopPropagation()
    setPopup('modal')
    setPopup1('modal is-active')

  }

  const handleDeletePost = async (event) => {
    event.stopPropagation()
    try {
      const res = await deletePost(postId)
      handleUpdatePosts(res.data)
      location.reload()
    } catch (err) {
      console.warn(err)
    }


  }


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
              {/* <a onClick={handleSharePost} className="card-footer-item">Share</a> */}
              <a onClick={handleCommentPost} className="card-footer-item">Comment</a>
              <a onClick={handleEditPost} className="card-footer-item">Edit</a>
              <a onClick={handleDeletePost} className="card-footer-item has-text-danger is-danger">Delete</a>
            </>
            :
            <>
              <a onClick={handleLikePost} className="card-footer-item">
                {
                  likeText
                }
              </a>
              <a onClick={handleCommentPost} className="card-footer-item">Comment</a>
              {/* <a onClick={handleSharePost} className="card-footer-item">Share</a> */}
            </>
        }
      </footer>
    </>
  )
}

export default PostSection