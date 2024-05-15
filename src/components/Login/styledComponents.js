import styled from 'styled-components'

export const LoginPageContainer = styled.div`
background-color:${props => {
  return props.isDarkTheme ? '#313131' : '#f4f4f4'
}};
height:100vh;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

export const FormContainer = styled.form`
 background-color:${props => {
   return props.isDarkTheme ? '#0f0f0f' : '#ffffff'
 }};
 padding:40px;
 border-radius:16px;
 display:flex;
 flex-direction:column;
 align-items:center;
`
export const WebsiteLogoImage = styled.img`
width:120px;
height:50px;
`

export const Label = styled.label`
color:${props => (props.isDarkTheme ? '#ffffff' : '#94a3b8')};
font-family:"Roboto";
align-self:flex-start;
margin-top:20px;
font-weight:bold;
`

export const Input = styled.input`
border:1px solid #94a3b8;
background-color:transparent;
width:250px;
padding:10px;
border-radius:6px;
color:${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')}
`

export const Checkbox = styled.input`
height:25px;
width:25px;
`

export const ShowPasswordLabel = styled.label`
color:${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
font-family:"Roboto";
`

export const ShowPasswordContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-top:10px;
align-self:flex-start;
`

export const Button = styled.button`
 padding:15px;
 background-color:#3b82f6;
 color:#ffffff;
 border:none;
 border-radius:8px;
 margin-top:15px;
 width:100%;
 cursor:pointer;
`

export const ErrorMessage = styled.p`
color:#ff0000;
`