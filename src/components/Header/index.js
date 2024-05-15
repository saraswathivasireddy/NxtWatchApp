import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {IoSunnyOutline} from 'react-icons/io5'
import {IoMoon} from 'react-icons/io5'
import NxtWatchContext from '../../NxtWatchContext'

import {
  Nav,
  WebsiteLogoImage,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  NavRightContainer,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const onClickSunny = () => {
          toggleTheme()
        }

        const onClickMoon = () => {
          toggleTheme()
        }

        return (
          <Nav isDarkTheme={isDarkTheme}>
            {isDarkTheme && (
              <Link to="/">
                <WebsiteLogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </Link>
            )}

            {!isDarkTheme && (
              <Link to="/">
                <WebsiteLogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </Link>
            )}

            <NavRightContainer>
              <li>
                {isDarkTheme && (
                  <ThemeButton data-testid="theme">
                    <IoSunnyOutline
                      style={{color: '#ffffff', height: '40px', width: '40px'}}
                      onClick={onClickSunny}
                    />
                  </ThemeButton>
                )}
              </li>

              {!isDarkTheme && (
                <ThemeButton data-testid="theme">
                  <IoMoon
                    style={{height: '40px', width: '40px'}}
                    onClick={onClickMoon}
                  />
                </ThemeButton>
              )}

              <li>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </li>
              <LogoutButton onClick={onClickLogout} isDarkTheme={isDarkTheme}>
                Logout
              </LogoutButton>
            </NavRightContainer>
          </Nav>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)