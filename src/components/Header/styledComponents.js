import styled from 'styled-components'

export const Nav = styled.nav`
position:fixed;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
background-color:${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
padding:10px;
width:100%;
height:12vh;
`

export const WebsiteLogoImage = styled.img`
width:120px;
height:50px;
`
export const ThemeButton = styled.button`
background-color:transparent;
border:none;
cursor:pointer;
margin-right:15px;
`

export const ProfileImage = styled.img`
height:50px;
width:50px;
margin-right:15px;
`
export const LogoutButton = styled.button`
cursor:pointer;
padding:10px;
color:${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
border:${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')} 2px solid;
border-radius:4px;
background-color:transparent;
margin-right:15px;
`
export const NavRightContainer = styled.div`
display:flex;
align-items:center;
list-style-type:none;
`