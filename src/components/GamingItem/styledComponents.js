import styled from 'styled-components'

export const GamingItemList = styled.li`
list-style-type:none;
margin-right:20px;
margin-bottom:40px;
`

export const GamingImage = styled.img`
height:250px;
width:200px;
`

export const Title = styled.p`
font-family:"Roboto";
color:${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`
export const View = styled.p`
font-family:"Roboto";
color:#7e858e;
`