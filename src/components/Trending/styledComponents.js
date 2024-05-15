import styled from 'styled-components'

export const TrendingHeadingContainer = styled.div`
padding:15px;
background-color:${props => (props.isDarkTheme ? '#383838' : '#bca89f')};
height:13vh;
display:flex;
flex-direction:row;
align-items:center;

`

export const FireImageContainer = styled.div`
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

export const TrendingC = styled.div`
padding-top:12vh;
margin-left:230px;
`

export const TrendingVideosContainer = styled.ul`
background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
padding:15px;
margin-top:0px;
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

export const TextHeading = styled.h1`
font-family:"Roboto";
color:${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const EntireTrendingContainer = styled.div``

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