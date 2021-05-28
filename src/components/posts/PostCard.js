import { useEffect, useState } from 'react'
import { getSingleUser } from '../../lib/api'
import PostSection from './PostSection'
import CommentSection from './CommentSection'
import { likePost } from '../../lib/api'
import { getToken, isAuthenticated } from '../../lib/auth'

function PostCard({ title, text, image, userId, comments, likedByArray, postId }) {
  const [author, setAuthor] = useState(null)
  const [popup, setPopup] = useState('modal')

  const handlePostOpen = () => {
    setPopup('modal is-active')
    console.log('on')
  }

  const handlePostClose = (event) => {
    setPopup('modal')
    console.log('off')
    event.stopPropagation()
    return
  }

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

  const handleLikePost = async (event) => {
    event.stopPropagation()
    console.log('User passes Auth: ', isAuthenticated(), 'postId: ', postId, 'token: ', getToken())
    try {
      await likePost(postId)
      this.forceUpdate()
    } catch (e) {
      console.warn(e)
    }
    console.log('Liked post of title: ', title)
  }

  const handleCommentPost = async (event) => {
    event.stopPropagation()
    console.log('Commented post of title: ', title)

  }

  const handleSharePost = async (event) => {
    event.stopPropagation()
    console.log('Shared post of title: ', title)

  }

  const handleEditPost = async (event) => {
    event.stopPropagation()
    console.log('Edtied post of title: ', title)

  }

  const handleDeletePost = async (event) => {
    event.stopPropagation()
    console.log('Deleted post of title: ', title)

  }
  return (
    <div className='column is-full'>
      <div onClick={handlePostOpen} className="card m-5">
        <PostSection
          title={title}
          text={text}
          image={image}
          userId={userId}
          likedByArray={likedByArray}
          author={author}
          handleLikePost={handleLikePost}
          handleCommentPost={handleCommentPost}
          handleSharePost={handleSharePost}
          editPost={handleEditPost}
          deletePost={handleDeletePost}
        />
        {comments &&
          <CommentSection
            comments={comments}
            maxComments={2}
          />
        }
        <div className={popup}>
          <div onClick={handlePostClose} className="modal-background"></div>
          <div className="modal-content has-background-white">
            <PostSection
              title={title}
              text={text}
              image={image}
              userId={userId}
              likedByArray={likedByArray}
              author={author}
              handleLikePost={handleLikePost}
              handleCommentPost={handleCommentPost}
              handleSharePost={handleSharePost}
              handleEditPost={handleEditPost}
              handleDeletePost={handleDeletePost}
            />
            <CommentSection
              comments={comments}
            />
          </div>
          <button onClick={handlePostClose} className="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    </div>
  )
}

export default PostCard