function CommentCard({ text, userId, likedByArray }) {
  return (
    <div className='comment-border p-0 m-0'>
      <div className="card-content pt-5 pb-0">
        <div className='columns'>
          <div className="content column is-four-fifths m-0">
            {text}
          </div>
          <a className='column has-text-centered'>
            {`Like ${likedByArray ? `[${likedByArray.length}]` : ''}`}
          </a>
        </div>
        <h3>
          {likedByArray && 'Liked By:'}
        </h3>
        <h4>
          {likedByArray && likedByArray.map(like => <a key={like}>{like}, </a>)}
        </h4>
      </div>
    </div>
  )
}

export default CommentCard