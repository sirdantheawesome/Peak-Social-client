function PostCard({ title, text, image, userId }) {


  //! Temporary testing variables, swap for auth and passed in user array
  const isCreatorUser = true
  const likedByArray = ['Craig', 'Dan', 'Bradley']

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
          isCreatorUser ?
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
  )
}

export default PostCard