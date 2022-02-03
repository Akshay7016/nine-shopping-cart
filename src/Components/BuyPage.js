import React, { useState, useEffect } from "react";
import axios from "axios";

import { random, commerce } from "faker"
import { Container, Row, Col } from "reactstrap"
import Items from "./Items";

const apiKey = "563492ad6f9170000100000185ac3f9b370648b79447792aae3a60a5";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localUrl = "http://myjson.dit.upm.es/api/bins/dxhn";

const BuyPage = ({ addInCart }) => {
    const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const { data } = await axios.get(url, {
    //         header: {
    //             Authorization: apiKey
    //         }
    //     })
    //     const { photos } = data;   // Photos is array of objects

    //     // As allProduct (Array) contains many objects so it is "array" of objects
    //     const allProduct = photos.map((photo) => ({    // Object and it has added other external properties
    //         smallImage: photo.src.medium,
    //         tinyImage: photo.src.tiny,
    //         productName: random.word(),
    //         productPrice: commerce.price(),
    //         id: random.uuid()
    //     }))

    //     setProduct(allProduct);  // allProduct is also array
    // }

    const fetchPhotos = async () => {
        const { data } = await axios.get(localUrl);

        const { photos } = data;   // Photos is array of objects

        // As allProduct (Array) contains many objects so it is "array" of objects
        const allProduct = photos.map((photo) => ({    // Object and it has added other external properties
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }))

        setProduct(allProduct);  // allProduct is array
    }

    useEffect(() => {
        fetchPhotos()
    }, [])


    return (
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>
            <Row>
                {
                    product.map((product) => (
                        <Col md={4} key={product.id}>
                            <Items product={product} addInCart={addInCart} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default BuyPage;