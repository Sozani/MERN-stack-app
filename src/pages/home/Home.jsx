import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
const Home = () => {
  return (
      <div className='Home'>
         <ProfileSide/>
          <div className="postSide">Posts</div>
          <div className="rightSide">righSide</div>
    </div>
  )
}

export default Home