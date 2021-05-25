import Register from './Register'
import Login from './Login'

function Home() {
  return (

    <section className="section is-mobile">
      <div className="box">
        <div className="columns is-mobile is-centered">
          <div className="column is-half">
            <p>
              👁 PEEK 👁
            </p>
          </div>
        </div>
      </div>
      <div className="hero-body ">
        <div className="thing">
          <Register />
          <Login />
        </div>
      </div>
      <div className="columns is-mobile is-centered">
        <div className="column is-half is-centered ">
          <button type="submit" className="button is-fullwidth is-info">Press to Peek</button>
        </div>
      </div>
    </section>

  )
}

export default Home