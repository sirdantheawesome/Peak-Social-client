import CommentCard from './CommentCard'

function CommentSection({ comments, maxComments }) {
  return (
    <div className='comment-border'>
      {comments.length ? <a className='is-centered p-3'>Comments: [{comments.length}]</a> : ''}
      {comments ?
        comments.map((comment, i) => {
          if (i > maxComments - 1) {
            console.log(i)
            return
          } else {
            return (
              <CommentCard key={comment._id} text={comment.text} userId={comment.user} />
            )
          }
        })
        : ''
      }
    </div>
  )
}

export default CommentSection