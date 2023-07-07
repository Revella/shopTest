import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';
const Container = styled.div`
  width: 100%;
  border: none !important;
  margin-bottom: 10px;
  z-index: 1;
  @media only screen and (max-width: 767px){
    padding: 10px;
    display: flex;
    justify-content: center;
    algin-items: center;
  }
`
const CardInner= styled.div`
  position: relative;
  @media only screen and (max-width: 767px){
    width: 90%;
  }
`
const ImgDiv = styled.div`
  border-radius: 15px;
  box-shadow: 0px 2px 3px rgba(237, 169, 138, 0.2);
  overflow: hidden; 

`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  transition: all 0.8s linear;
  &:hover {
    transform: scale(1.2);
  }
`
const ProductCardText = styled.div`
  text-transform: uppercase;
  padding: 15px;
  :nth-of-type(2):before {
    content: '￦';
    margin-right: 5px;
  }
  :nth-of-type(3) {
    position: absolute;
    top: 1rem;
    font-weight: bold;
  }
`
const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  }
  return (
    <Container onClick={showDetail}>
      <CardInner>
        <ImgDiv>
          <Image src={item.img} />
        </ImgDiv>
        <ProductCardText>
          <div style={{fontWeight:"bold", fontSize: "1.375rem" , color: "#333"}}>{item.title}</div>
          <div style={{fontSize: "1.125rem"}}>{item.price}</div>
          <div style={{fontSize: "0.75rem", color: "#EDA98A"}}>{item.new == true ? "new" : ""}</div>
        </ProductCardText>
      </CardInner>
    </Container>
  )
}

export default ProductCard