import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Logo } from '../components'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby lyft crucifix post-ironic, twee yr gastropub letterpress
            deep v jawn tote bag mustache disrupt blackbird spyplane aesthetic.
            Pitchfork hot chicken banh mi blog sus snackwave +1 taxidermy put a
            bird on it solarpunk franzen.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn login-link'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
