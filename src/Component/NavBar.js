import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const  Container = styled.div`
  width: 100vw;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(225, 225, 225, 0.3);
  @media only screen and (max-width: 767px){
    justify-content: space-between;
  }
`
const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Caprasimo', cursive;
  font-size: 1.8rem;
  font-weight: bold;
`
const MenuArea = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `
const MenuList = styled.li`
  padding: 15px;
  list-style: none;
  @media only screen and (max-width: 767px){
    padding: 5px;
  }
`
const Menu = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #000;
    font-weight: bold;
  }
  &:focus {
    font-size: 17px;
    color: #EDA98A;
    font-weight: bold;
  }
`
const SearchBoxArea = styled.div`
  padding-top: 15px;
  align-items: center;
  @media only screen and (max-width: 767px){
    padding-top: 0;
    position: relative;
    :first-child {
      position: absolute;
      top: 1.5rem;
      right: 11.25rem;
    }
  }
`
  const SearchBox = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #EDA98A;
  padding-left: 10px;
  &:focus {
    outline: none;
    color: #555;
  }
  &::placeholder {
    padding-left: 10px;
    font-size: 0.8rem;
    color: #777
  }
  @media only screen and (max-width: 767px){
    position: absolute;
    top: 1.25rem;
    right: 0.125rem;
  }
`
const NavHeader = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 5rem;
  @media only screen and (max-width: 767px){
    top: 6.875rem;
    right: 1.875rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
`

const NavBar = ({authenticate, setAuthenticate}) => {
  const menuList = ["Best", "컵/텀블러", "리빙", "침구", "세일"];
  const navigate = useNavigate();
  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  }
  return (
    <Container>
      { authenticate ? (
        <NavHeader onClick={()=> setAuthenticate(false)}>Logout</NavHeader>
        ) : (
          <NavHeader onClick={()=> navigate('/login')}>Login</NavHeader>
        )
      }
      <Logos onClick={()=> navigate('/')}>LOGO</Logos>
      <MenuArea>{menuList.map((menu, index) => (<MenuList><Menu href='#' key={index}>{menu}</Menu></MenuList>))}</MenuArea>
      <SearchBoxArea>
        <FontAwesomeIcon style={{color:"#EDA98A"}} icon={faSearch} />
        <SearchBox onKeyPress={search} placeholder='검색어를 입력하세요.'/>
      </SearchBoxArea>
    </Container>
  )
}
export default NavBar