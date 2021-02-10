import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import reviewInfo from '../staticData/reviewInfo'
import ReviewCard from '../components/ReviewCard'
import { connect } from 'react-redux'
import { checkLoggedInStatus, logout } from '../redux'

const Home = ({ history, status, isLoggedIn,logout }) => {

  useEffect(() => {
    isLoggedIn()
  }, [isLoggedIn])

  const handleLogout = () => {
    logout()
    setTimeout(() => {
      history.push("/")
    }, 3000);
  }

  const showAuth = () => {
    if (status.logged_in) {
      return (
        <>
          <h6 className="nav-link">{status.user.email}</h6>
          <h6 className="nav-link" onClick={handleLogout}>SIGNOUT</h6>
        </>
      )
    }
    else if (!status.logged_in) {
      return (
        <>
          <Link className="nav-link" to={"/signin"}>SIGN IN</Link>
          <Link className="nav-link" to={"/signup"}>SIGN UP</Link>
        </>
      )

    }
  }

  return (
    <>
      <section className="section-a p-2">
        <div className="container">
          <div className="d-flex flex-row justify-content-between mt-3">
            <img className="home-logo" src="https://i.ibb.co/D1kTVXk/logo-ac.png" alt="app-logo" />
            <div className="custom-font-a d-flex justify-content-between">
              {showAuth()}
            </div>
          </div>
          <div className="empty-div">
          </div>
          <div className="text-white">
            <h3 className="custom-font-a">
              Find the best house plans on our platform
            </h3>
            <p className="custom-font-b">
              The best offers for you to bring to life<br />
              Trust us, it all begins with choosing your dream home design with us
            </p>
            <Link className="btn-start custom-font-a rounded-pill" to={"/houseplans"}>START HERE</Link>
          </div>
        </div>
      </section>
      <section className="section-b">
        <div className="container">
          <div className="w-100 text-center p-5">
            <p className="text-muted custom-font-a xs-font">SIMPLE AND FAST WAY TO FIND HOUSE PLANS</p>
            <h3 className="custom-font-a">Remarkable designs from professional architects</h3>
          </div>
          <div className="row">
            <div className="col-md-5">
              <h3 className="custom-font-a">
                Custom designs at your disposal at anytime
            </h3>
              <br />
              <p className="custom-font-b">
                You have the best experience in browsing our plans.<br />
              Information about our designs and architects is free of charge.
              Share your experience and contribute to other have marvelous dream homes
            </p>
              <br />
              <Link className="btn-start custom-font-a rounded-pill" to={"/houseplans"}>VIEW PLANS</Link>
            </div>
            <div className="col-md-6 p-3">
              <img className="mock-img" src="https://i.ibb.co/LdMVvXg/mock.png" alt="mock-design" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-c">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 p-3">
              <img className="mock-img" src="https://i.ibb.co/LdMVvXg/mock.png" alt="mock-design" />
            </div>
            <div className="col-md-5">
              <h3 className="custom-font-a">
                Choose the best as your favourites
            </h3>
              <br />
              <p className="custom-font-b p-3">
                You have the chance to save your favourites for easy access.<br />
              Create an account on our platform to access this feature.
              Share your experience and invite your friends to join.
            </p>
              <br />
              <Link className="btn-start custom-font-a rounded-pill" to={"/favourites"}>VIEW FAVOURITES</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-d">
        <div className="container">
          <div className="w-100 text-center p-3">
            <p className="text-muted custom-font-a xs-font">PEOPLE ARE ALREADY ENJOYING OUR SERVICE</p>
            <h3 className="custom-font-a">Look at what these have to say</h3>
          </div>
        </div>
        <div className="client-container">
          {
            reviewInfo.map(item => {
              return <ReviewCard key={reviewInfo.indexOf(item)} img_url={item.img_url} title={item.title} name={item.name} comment={item.comment} />
            })
          }
        </div>
      </section>
      <section className="section-e">
        <div className="w-100 text-center p-4">
          <h5 className="custom-font-a text-white">A Remarkable Perfection</h5>
          <br />
          <Link className="btn-start custom-font-a rounded-pill" to={"/houseplans"}>START HERE</Link>
        </div>
      </section>
      <section className="section-f">
        <div className="w-100 text-center p-4">
          <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
          <br />
          <br />
          <p className="text-muted custom-font-a xs-font">
            Daytona Ave 130, Glabeek, Flanders, BE <br />
            37 St Laurent's St, Pawadulaanstraat CBD 3XR, Leuven<br />
            + 324 887 59 67
          </p>
          <br />
          <i className="fab fa-facebook facebook fa-2x"></i><span className="text-w">XX</span>
          <i className="fab fa-twitter-square twitter fa-2x"></i><span className="text-w">XX</span>
          <i className="fab fa-instagram instagram fa-2x"></i>
          <br />
          <br />
          <p className="text-muted custom-font-a xs-font">
            Archonnect 2021, All rights reserved
          </p>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = state => {
  return {
    status: state.loggedIn.data
  }
}


const mapDispatchToProps = dispatch => {
  return {
    isLoggedIn: () => dispatch(checkLoggedInStatus()),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
