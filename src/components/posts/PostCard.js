import { useEffect, useState } from 'react'
import { getSingleUser } from '../../lib/api'
import PostSection from './PostSection'
import CommentSection from './CommentSection'
import PostEdit from './PostEdit'

function PostCard({ title, text, image, userId, comments, likedByArray, postId, handleUpdatePosts }) {
  const [author, setAuthor] = useState(null)
  const [popup, setPopup] = useState('modal')
  const [popup1, setPopup1] = useState('modal')

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

  const handleClose = () => {
    setPopup1('modal')
  }

  return (
    <div className='column is-full'>
      <div className={popup1}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create a new post!</p>
            <button onClick={handleClose} className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <PostEdit setPopup1={setPopup1} postId={postId} handleUpdatePosts={handleUpdatePosts} />
          </section>
        </div>
      </div>
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
          setPopup1={setPopup1}
          setPopup={setPopup}
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
              setPopup1={setPopup1}
              setPopup={setPopup}
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