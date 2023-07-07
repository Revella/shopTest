import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { styled } from 'styled-components';

const Containers = styled.div `
  padding-top: 50px;
`
const MainBanner = styled.div`
  width: 95vw;
  height: 35vh;
  margin: 0 auto;
  background: url('https://ecudemo223197.cafe24.com/web/upload/NNEditor/20220614/69ad7a172f0afb6c76983477f56f9841.jpg') no-repeat;
  background-size: cover;
  margin-bottom: 50px;
  position: relative;
  &::before {
    content: 'Best Items';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    font-family: 'Caprasimo', cursive;
    color: #fff;
    text-shadow: 1px 2px 5px #EDA98A;
    z-index: 1;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(25, 25, 25, 0.2);
  }
  @media only screen and (max-width: 767px){
    &::before {
      font-size: 3.5rem;
      text-align: center;
    }
  }
`
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    let url = `https://my-json-server.typicode.com/Revella/shopTest/products/?q=${searchQuery}`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=> {
    getProduct();
  }, [query]);

  return (
    <Containers>
      <MainBanner />
      <Container>
        <Row>
          {productList.map((item) => (
            <Col md={4} sm={12} key={item.id}>
              <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </Containers>
  )
}

export default ProductAll