import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSingleUser } from '../../lib/api'

function CommentCard({ text, userId, likedByArray }) {
  const [author, setAuthor] = useState(null)

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
    <div className='hover-border p-0 m-1'>
      <Link to={`/profile/${userId}`}>
        <div className='image'>
          <img className='is-rounded image is-32x32 mt-2 ml-2' src={author ? author.image : ''} />
        </div>
        <div className='has-text ml-2'>{author && author.username}</div>
      </Link>
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