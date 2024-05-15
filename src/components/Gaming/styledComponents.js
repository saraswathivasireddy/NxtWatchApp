import styled from 'styled-components'

export const GamingContainer = styled.div`
padding-top:12vh;
padding-left:230px;
`

export const GamingHeadingContainer = styled.div`
background-color:${props => (props.isDarkTheme ? '#383838' : '#bca89f')};
height:13vh;
display:flex;
flex-direction:row;
align-items:center;
padding:15px;
`

export const GamingImageContainer = styled.div`
background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
height:70px;
width:70px;border-radius:60px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
margin-left:30px;
margin-right:15px;
`

export const TextHeading = styled.h1`
font-family:"Roboto";
color:${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const LoadingContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:75vh;
background-color:${props => {
  return props.isDarkTheme ? '#0f0f0f' : '#f9f9f9'
}} ;
`
export const GamingULContainer = styled.ul`
background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
padding:15px;
margin-top:0px;
display:flex;
flex-wrap:wrap;
`