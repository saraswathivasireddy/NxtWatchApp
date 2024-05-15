import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginPageContainer,
  FormContainer,
  WebsiteLogoImage,
  Label,
  Input,
  Checkbox,
  ShowPasswordLabel,
  ShowPasswordContainer,
  Button,
  ErrorMessage,
} from './styledComponents'

import NxtWatchContext from '../../NxtWatchContext'

class Login extends Component {
  state = {
    isPasswordShown: false,
    username: '',
    password: '',
    errorMsg: '',
    isShownError: false,
  }

  TogglePassword = () => {
    this.setState(prevState => ({isPasswordShown: !prevState.isPasswordShown}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      this.setState({isShownError: true, errorMsg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    console.log('Login Route')
    const {isPasswordShown, isShownError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginPageContainer isDarkTheme={isDarkTheme}>
              <FormContainer
                isDarkTheme={isDarkTheme}
                onSubmit={this.onSubmitForm}
              >
                {isDarkTheme && (
                  <WebsiteLogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" />
                )}
                {!isDarkTheme && (
                  <WebsiteLogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                )}

                <Label htmlFor="username" isDarkTheme={isDarkTheme}>
                  USERNAME
                </Label>
                <Input
                  id="username"
                  isDarkTheme={isDarkTheme}
                  placeholder="Username"
                  type="text"
                  onChange={this.onChangeUsername}
                />
                <Label htmlFor="password">PASSWORD</Label>
                <Input
                  id="password"
                  isDarkTheme={isDarkTheme}
                  placeholder="Password"
                  type={`${isPasswordShown ? 'text' : 'password'}`}
                  onChange={this.onChangePassword}
                />
                <ShowPasswordContainer>
                  <Checkbox type="checkbox" onClick={this.TogglePassword} />
                  <ShowPasswordLabel isDarkTheme={isDarkTheme}>
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <Button type="submit">Login</Button>
                {isShownError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </FormContainer>
            </LoginPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
