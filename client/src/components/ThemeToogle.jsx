import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import Wrapper from '../assets/wrappers/ThemeToggle'
import { useDashboardContext } from '../pages/DashboardLayout'

const ThemeToogle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext()
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className='toogle-icon' />
      ) : (
        <BsFillMoonFill className='toogle-icon' />
      )}
    </Wrapper>
  )
}

export default ThemeToogle
