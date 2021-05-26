import { isAuthor } from "../../lib/auth"

function PostCard({ title, text, image, userId, comments }) {


  //! Temporary testing variables, swap for auth and passed in user array
  const isCreatorUser = false
  const likedByArray = ['Craig', 'Dan', 'Bradley']


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
    <div className="card m-5">
      <div className="card-header">
        <div className="card-header-title">
          {title}
        </div>
      </div>
      {
        image &&
        <div className="card-image">
          <figure className="image">
            <img src={image} />
          </figure>
        </div>
      }

      <div className="card-content">
        <div className="content">
          {text}
        </div>
        <h3>Liked By: </h3>
        <h4>
          {likedByArray.map(like => <a key={like}>{like}, </a>)}
        </h4>
      </div>
      <footer className="card-footer">
        {
          isAuthor(userId) ?
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
  )
}

export default PostCard