import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
const Container = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  height: 100vh;
  `
const LoginInner = styled.form`
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #EDA98A;
  border-radius: 15px;
  box-shadow: 5px 1px 20px rgba(237, 169, 138, 0.3);
`
const LoginTitle = styled.h1`
  font-family: 'Caprasimo', cursive;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
`
const LoginDiv = styled. div`
  display: flex;
  flex-direction: column;
`
const IdComponent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 5px;
`
const Label = styled.label`
  font-weight: bold;
  color: #333;
`
const Error = styled.div`
  color: red;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
`
const Input = styled.input`
  padding: 0 5px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #EDA98A;
  &::placeholder {
    font-size: 12px;
    color: #777;
  }
  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  margin-top: 15px;
  padding: 5px 50px;
  border: none;
  background-color: #EDA98A;
  color: #fff;
  &:hover {
    box-shadow: inset 0 0 2px rgb(0, 0, 0, 0.2);
    opacity: 0.8;
  }
`
const Login = ({setAuthenticate}) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [errorId, setErrorId] = useState("");
  const [errorPw, setErrorPw] = useState("");
  const onChangeId = (e) => {
    setUserId(e.target.value);
  }
  const onChangePw = (e) => {
    setUserPw(e.target.value);
  }
  const onClickHandle = (e) => {
    e.preventDefault();
    if(userId === "") {
      setErrorId("아이디를 입력해주세요.");
    }
    if(userPw === "") {
      setErrorPw("비밀번호를 입력해주세요.");
    }
    if(userId !== "" && userPw !== "") {
      setAuthenticate(true);
      navigate('/');
    }
  }
  const navigate = useNavigate();

  return (
    <Container>
      <LoginInner onSubmit={(e) =>onClickHandle(e)}>
        <LoginTitle>Login</LoginTitle>
        <LoginDiv>
          <IdComponent>
            <Label>아이디</Label>
            <Input type='text' placeholder='아이디를 입력하세요.' onChange={onChangeId}/>
          </IdComponent>
          <Error>{errorId}</Error>
          <IdComponent>
            <Label>비밀번호</Label>
            <Input type='password' placeholder='비밀번호를 입력하세요.' onChange={onChangePw}/>
          </IdComponent>
          <Error>{errorPw}</Error>
        </LoginDiv>
          <Button>로그인하기</Button>
      </LoginInner>
    </Container>
  )
}

export default Login