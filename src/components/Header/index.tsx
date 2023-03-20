import logo from '../../../public/images/nav-logo.png'
import pageWidth from '../../constants/pageWidth'
import useWindowSize from '../../hooks/useWindowDimensions'
import DesktopHeaderContent from '../DesktopHeaderComponent'
import MobileHeaderContent from '../MobileHeaderComponent'
import menuItems from './header.data'

const Header: React.FC = () => {
  const { width } = useWindowSize()

  return (
    <header id='home'>
      {width &&
        (width < pageWidth.smallScreen ? (
          <MobileHeaderContent menuItems={menuItems} logo={logo.src} />
        ) : (
          <DesktopHeaderContent menuItems={menuItems} logo={logo.src} />
        ))}
    </header>
  )
}

export default Header
