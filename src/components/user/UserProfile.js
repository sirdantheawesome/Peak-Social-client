// import React from 'react'
// import { useParams} from '../../lib/auth'
// import { getSingleUser } from '../../lib/api'


// function UserProfile() {
//   const { userId } = useParams()
//   const [user, setUser] = React.useState(null)
 
//   React.useEffect(() => {
//     try{
//       const res = await getSingleUser(userId)
//       setUser(res.data)
//     }catch(err) {
//       setIsError(true)
//     }
//     getData()
//   },[userId])

//   console.log(user)

//   return (
//     <>
//       <div>
//        hello
//       </div>
//     </>   
//   )
// }
 

// export default UserProfile