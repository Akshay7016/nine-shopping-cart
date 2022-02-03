import React from "react";

import {
    Container,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Col,
    Row,
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap"



const Cart = ({ cartItem, buyNow, removeItem }) => {
    let amount = 0;

    // We can use map also
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    });


    return (
        <Container fluid>
            <h1 className="text-success text-center">Your Cart</h1>
            <ListGroup className="mt-3">
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img height="100" src={item.tinyImage} />
                            </Col>

                            <Col className="text-center">
                                <div className="text-primary font-weight-bold">{item.productName}</div>
                                <div className="mt-2">
                                    <span className="mr-3">Price :- {item.productPrice}</span>
                                    <Button color="danger" onClick={() => removeItem(item)}>
                                        Remove
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>

            {/* If everything is empty */}
            {cartItem.length >= 1 ? (
                <Card className="text-center mt-3">
                    <CardHeader className="font-weight-bold">Grand Total</CardHeader>
                    <CardBody>
                        Your amount for {cartItem.length} product is {amount}
                    </CardBody>
                    <CardFooter>
                        <Button color="success" onClick={buyNow}>
                            Pay here
                        </Button>
                    </CardFooter>
                </Card>
            ) : (
                <h1 className="text-warning mt-2 text-center">Cart is empty</h1>
            )}
        </Container>
    )
}

export default Cart;