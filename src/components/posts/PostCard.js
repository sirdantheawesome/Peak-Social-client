import { useEffect, useState } from 'react'
import { getSingleUser } from '../../lib/api'
import PostSection from './PostSection'
import CommentSection from './CommentSection'

function PostCard({ title, text, image, userId, comments, likedByArray, postId, handleUpdatePosts }) {
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
          postId={postId}
          handleUpdatePosts={handleUpdatePosts}
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
              postId={postId}
              handleUpdatePosts={handleUpdatePosts}
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