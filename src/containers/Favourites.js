import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FavCard from '../components/FavCard'
import { getFavourites, checkLoggedInStatus,logout } from '../redux'

const Favourites = ({history, loggedInStatus, isLoggedIn,favourites,getFavourites,logout}) => {

  useEffect(() => {
    getFavourites()
    isLoggedIn()
  }, [getFavourites, isLoggedIn])

  const showONavLinks = () => {
    if (loggedInStatus.logged_in) {
      return (
        <>
          <li className="nav-item"><Link to={"/houseplans"}>House Plans</Link></li>
          <li className="nav-item"><Link to={"/favourites"}>Favourites</Link></li>
          <li className="nav-item"><button className="btn btn-start rounded-pill xs-font" onClick={handleLogout}>Logout&nbsp;&nbsp;<i className="fas fa-sign-out-alt"></i></button></li>
        </>
      )
    }
  }

  const handleLogout = () => {
    logout()
    setTimeout(() => {
      history.push("/signin")
    }, 3000);
  }

  const showFavourites = () => {
    if (!_.isEmpty(favourites.result) && favourites.status === 200) {
      const res = favourites.result
      return (
        <>
          <div className="favourite-list">
            {
              res.map((item, idx) => <FavCard key={idx} id={item.id} img_url={item.design_img_url} name={item.name} price={item.price} />)
            }
          </div>
        </>
      )
    }
    else if (favourites.status === 401) {
      return (
        <>
          <div className="text-center">
            <h1 className="custom-font-b text-danger">401: Authorization Required</h1>
            <h5 className="custom-font-b"><Link to={"/"}><u>Go Home</u></Link></h5>
          </div>
        </>
      )
    }
    if (favourites.loading) {
      return <LoadingSpinner />;
    }
    if (favourites.errorMsg !== '') {
      return <p className="text-danger mt-5">{favourites.errorMsg}</p>;
    }
  }

  return (
    <div>
      <ul className="navigation">
        <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
        <li className="nav-item"><Link to={"/"}>Home</Link></li>
        {showONavLinks()}
      </ul>

      <input type="checkbox" id="nav-trigger" className="nav-trigger " />
      <label htmlFor="nav-trigger"><span className="hidden_nav"></span></label>

      <div className="content-wrap">
        <h2 className="text-center custom-font-a plan-header"><i className="fas fa-star text-warning"></i> Favourites <i className="fas fa-star text-warning"></i></h2>
         {showFavourites()}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loggedInStatus: state.loggedIn.data,
    favourites: state.favourites.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedIn: () => dispatch(checkLoggedInStatus()),
    getFavourites: () => dispatch(getFavourites()),
    logout: () => dispatch(logout())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Favourites)
