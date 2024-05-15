import styled from 'styled-components'

export const HomeContainer = styled.div`
display:flex;
flex-direction:row;
`
export const HomeRightContainer = styled.div`
margin-left:230px;
margin-top:74px;
background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')}
`
export const BannerImg = styled.div`
background-image:url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
background-size:cover;
width:85vw;
display:flex;
flex-direction:column;
align-items:flex-start;
`
export const ImageLogo = styled.img`
width:120px;
height:50px;
`
export const PrepaidPara = styled.p`
color:#1e293b;
font-size:29px;
width:450px;
`
export const BannerImageInside = styled.div`
padding:40px;
`

export const CloseButton = styled.button`
background-color:transparent;
border:none;
cursor:pointer;
align-self:flex-end;
margin:15px;
`
export const SearchInputDark = styled.input`
width:300px;
background-color:${props => (props.isDarkTheme ? 'transparent' : '#ffffff')};
border:#616e7c 1px solid;
padding:10px;
height:40px;
color:${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
outline:none;
`

export const SearchContainerDark = styled.div`
display:flex;
flex-direction:row;
border:#616e7c 1px solid:
border-radius:6px;
`

export const SearchVideoContainerDark = styled.div`
padding:40px;
`

export const SearchButtonDark = styled.button`
background-color:${props => (props.isDarkTheme ? '#313131' : '#f9f9f9')} ;
width:100px;
border:#616e7c 1px solid;
height:40px;
`
export const LoadingContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

export const VideosContainer = styled.ul`
display:flex;
flex-direction:row;
flex-wrap:wrap;
`

export const NoResutsContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`

export const FailureContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`

export const NoResultsImage = styled.img`
 height:250px;
 width:350px;
`
export const NoResultsHeading = styled.h1`
font-family:"Roboto";
color:${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const NoResultsPara = styled.p`
font-family:"Roboto";
color:#7e858e;
`
export const RetryButton = styled.button`
background-color:#4f46e5;
font-family:"Roboto";
color:#ffffff;
border:none;
padding:10px;
border-radius:6px;
width:80px;
`