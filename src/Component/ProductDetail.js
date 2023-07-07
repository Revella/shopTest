import React, { useEffect, useState } from 'react'
import { Dropdown, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components';

const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  height: 100vh
`
const ProductInner = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 767px){
    flex-direction: column;
    gap: 5px;
  }
`
const ProductImg = styled.div`
  flex: 1;
  width: 400px;
  height: 480px;
  border-radius: 15px;
  overflow: hidden;
  @media only screen and (max-width: 767px){
    width: 100%;
    height: auto;
  }
`
const Info = styled.div`
  flex: 1;
`
const ProductInfo = styled.div`
  padding: 15px;
  color: #444;
`
const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 36px;
  `
const ProductPrice = styled.div`
font-size: 24px;
font-weight: 600;
  &:before {
    content: '￦'
  }
`
const ProductChoice = styled.div`
  font-size: 12px;
  color: #777;
  margin-bottom: 10px;
`
const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Revella/shopTest/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    console.log(data);
    setProduct(data);
  }
  useEffect(()=> {
    getProductDetail();
  },[])
  if(loading || product == null) return <h1>Loading</h1>
  return (
    <Container>
      <ProductInner>
        <ProductImg>
          <img style={{objectFit:"cover", width: "100%", height: "100%"}} src={product.img} />
        </ProductImg>
        <Info>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.price}</ProductPrice>
          <ProductChoice> 
            {product.choice ? `Best choice Item`: ``}
          </ProductChoice>
          <ProductInfo>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid laborum temporibus quis hic ipsa dicta excepturi explicabo enim aspernatur.
          </ProductInfo>
          <Dropdown className='drop-down'>
            <Dropdown.Toggle style={{width: "100%"}} variant="outline-dark" id="dropdown-basic" >
              색상 선택
            </Dropdown.Toggle>
            <Dropdown.Menu style={{width: "100%", textAlign:"center"}}>
              {product.color.map((item) => (
                <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button style={{marginTop: 10, width: "100%"}} variant='dark' className='add-button'>추가</Button>
          <div style={{marginTop: 10}}>
          <Button style={{width: "100%"}} variant="dark">구매하기</Button>
          </div>
          </Info>
      </ProductInner>
    </Container>
  )
}

export default ProductDetail