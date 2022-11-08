import NavBar from '../components/NavBar'
import '../css/home.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


export const Home = () => {
  return (
    <>
    <div className="background">

    </div>
      <NavBar />
      <section className="home-sec-a">
        <div className="home-sec-a-content">
          <div className="home-a-title">
            <p style={{fontSize:'42px',fontWeight:100}}>FINDING</p>
            <p style={{fontSize:'32px',fontWeight:100}}>WHAT TO WATCH</p>
            <p style={{fontSize:'42px',fontStyle:'italic',fontWeight:'800'}}>MADE EASY</p>
          </div>
          <div className="get-started">
            <Link to='/getstarted' className="signup-btn">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
