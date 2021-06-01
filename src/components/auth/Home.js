import Register from './Register'
import Login from './Login'
import { Link } from 'react-router-dom'

function Home() {
  return (

    <section className="section is-mobile">
      {/* <div className="box"> */}
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <div className="peek-title">
            <p> 
              👁  PEEK  👁 
            </p>
            <>
              <br/>
              <br/>
            </>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="hero-body ">
        <div className="thing">
          <Register />
          <Login />
        </div>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-half is-centered ">
          <Link to={'/feed'}>
            <button type="submit" className="button is-fullwidth is-info is-large">Press to Peek</button>
          </Link>
          <p className="intro">Welcome to Peek, where peeking and likes will help you earn peek coins to assist you on your climb to the top of the peek peak and showcase your popularity</p>

        </div>
      </div>
    </section>

  )
}

export default Home