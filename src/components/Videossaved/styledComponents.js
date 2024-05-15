import styled from 'styled-components'

export const NoSavedContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
height:100vh;

`

export const SavedVideosContainer = styled.div`
background-color:${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
padding-top:12vh;
padding-left:230px;

`

export const NoSavedImage = styled.img`
height:250px;
width:350px;
`
export const NoSavedHeading = styled.h1`
font-family:"Roboto";
font-size:18px;
color:${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const NoSavedPara = styled.p`
font-family:"Roboto";
font-size:16px;
color:#7e858e;
`