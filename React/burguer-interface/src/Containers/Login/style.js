import styled from 'styled-components'
import BgLogin from '../../Assets/BgLogin.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('${BgLogin}');
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginImage = styled.img`
  height: 70%;
`
export const ContainerItems = styled.div`
  height: 70%;
  background: #373737;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px 75px;

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
    margin-top: 70pxpx;
  }

  form{
    display: flex;
    flex-direction: column;
  }
`
export const ErrorMessage = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
margin-top: 2px;
color: #CC1717;
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-top: 28px;
  margin-bottom: 5px;
  color: #ffffff;
`
export const Input = styled.input`
  width: 391px;
  height: 38px;
  background: #ffffff;
  border-radius: 5px;
  border: ${props => (props.error ? '3px solid #CC1717' : 'none')} ;
  padding-left: 10px;
`
export const Button = styled.button`
  width: 182.81px;
  height: 45px;
  background: #9758a6;
  border-radius: 20px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #eeeeee;
  margin-top: 75px;
  margin-bottom: 25px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`
export const CadastroLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a{
    cursor: pointer;
    text-decoration: underline;
  }
`
