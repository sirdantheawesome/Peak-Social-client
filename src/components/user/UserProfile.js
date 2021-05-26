import React from 'react'
function UserProfile() {

  const user = {
    username: 'craig',
    image: 'https://static.bhphotovideo.com/explora/sites/default/files/ts-space-sun-and-solar-viewing-facts-versus-fiction.jpg',
    summary: 'blah blah blah',
    peekcoin: 200,
  }

  return (
    <>
      <div>
        {user}
      </div>
    </>   
  )
}
 

export default UserProfile